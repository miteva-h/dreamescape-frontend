import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Link} from "react-router-dom";
import {FaHamburger, FaBed, FaEuroSign, FaRegCalendarAlt} from "react-icons/fa";
import marble from '../../../photos/white_marble.avif';
import {BsFillGeoAltFill} from "react-icons/bs";
import L from 'leaflet';
import {MapContainer, Marker, TileLayer} from "react-leaflet";

const Accommodation = (props) => {

    const {accommodation} = props;
    const [coordinatesAvailable, setCoordinatesAvailable] = useState(false);
    const [typesAvailable, setTypesAvailable] = useState(false);
    const[typeOfBoard, setTypeOfBoard]=useState("");
    const[typeOfAccommodation, setTypeOfAccommodation]=useState("");

    useEffect(() => {
        if (accommodation && typeof accommodation.coordinate_x === 'number' && typeof accommodation.coordinate_y === 'number') {
            setCoordinatesAvailable(true);
        }
    }, [accommodation]);
    useEffect(() => {
        if (accommodation && typeof accommodation.typeOfAccommodation === 'string' && typeof accommodation.typeOfBoard === 'string') {
            setTypesAvailable(true);
            setTypeOfAccommodation(accommodation.typeOfAccommodation.replace(/_/g, '  '));
            setTypeOfBoard(accommodation.typeOfBoard.replace(/_/g, '  '));
        }
    }, [accommodation]);

    const pinIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    const tileDisabled = ({activeStartDate, date, view}) => {
        var flag = false;
        if (props.datesNotAvailable.includes(dateToString(date.getDate(), date.getMonth() + 1, date.getFullYear()))) {
            flag = true;
        }
        return date < new Date() || flag;
    }

    const dateToString = (day, month, year) => {
        var d = day.toString();
        var m = month.toString();
        if (d.length === 1) {
            d = "0" + d;
        }
        if (m.length === 1) {
            m = "0" + m;
        }
        return year + "-" + m + "-" + d;
    }

    var s;
    var e;

    const [value, onChange] = useState(new Date());
    var array = value.toString();
    array = array.split(",");
    var start = array[0].substring(0, 15);
    var end = array[1];
    if (end !== undefined) {
        end = end.substring(0, 15);

        e = new Date(end);
        e = dateToString(e.getDate(), e.getMonth() + 1, e.getFullYear());

    }

    s = new Date(start);
    s = dateToString(s.getDate(), s.getMonth() + 1, s.getFullYear());

    var priceToPay = 0;
    if (start !== undefined && end !== undefined) {
        var startDate = new Date(start);
        var endDate = new Date(end);
        const startTime = startDate.getTime();
        const endTime = endDate.getTime();
        const daysBetween = (endTime - startTime) / (1000 * 60 * 60 * 24);
        priceToPay = daysBetween * (props.accommodation.pricePerNight)
    }

    let username = sessionStorage.getItem("username");
    let role = sessionStorage.getItem("role");

    let book;
    if (role != null && role === "USER" && end !== undefined) {
        book = (
            <div className="row p-2 me-5">
                <Link to={"/shoppingcart"}
                      onClick={() => props.onAddArrangement(s, e, props.accommodation.id, priceToPay, username)}
                      className="btn" style={{background: "black", color: "white"}}>Book</Link></div>
        );
    }

    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "100%",
        }} className="min-vh-100">
            <div className="container">
                <div className="row pt-5 pb-2" style={{borderBottom: "0.4em solid black"}}>
                    <div style={{width: "65%"}}>
                        <img src={props.accommodation.photo} alt={props.accommodation.name}
                             style={{width: "90%", height: "auto"}}/>
                    </div>
                    <div style={{width: "35%", justifyContent: "center", alignItems: "bottom"}}>
                        {coordinatesAvailable ? <div className="w-100 d-block"><MapContainer
                            center={[accommodation.coordinate_x, accommodation.coordinate_y]}
                            zoom={16}
                            style={{height: '35em', width: '100%', border: "0.5em solid black"}}
                        >
                            <TileLayer
                                attribution="OpenStreetMap"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker
                                position={[accommodation.coordinate_x, accommodation.coordinate_y]}
                                icon={pinIcon}
                            ></Marker>
                        </MapContainer></div> : <div/>}
                        <div className="h-25"><a
                            href={`https://www.google.com/maps?q=${accommodation.coordinate_x},${accommodation.coordinate_y}`}
                            target="_blank" rel="noopener noreferrer">
                            View on Google Maps
                        </a></div>
                    </div>
                </div>
                <div className={"row h-auto w-100"}>
                    {typesAvailable && <div className="col-8 mb-5">
                        <h2 className="w-100 mt-3" style={{fontFamily: "Georgia"}}><b>{props.accommodation.name}</b>
                        </h2>
                        <h5><b><BsFillGeoAltFill></BsFillGeoAltFill>{props.accommodation.destination}</b></h5>
                        <h5 className="mt-4 w-75">{props.accommodation.description}</h5>
                        <h5 className="mt-3"><b>Sleeps: {props.accommodation.sleeps}<FaBed className="ms-2"></FaBed></b>
                        </h5>
                        <h5><b>Type of accommodation: {typeOfAccommodation}</b></h5>
                        <h5><b>Type of board: {typeOfBoard}<FaHamburger
                            className="ms-2"></FaHamburger></b>
                        </h5>
                        <h5><b>Price: {props.accommodation.pricePerNight}<FaEuroSign></FaEuroSign> /n</b>
                        </h5>
                    </div>}
                    <div className="col-4 h-auto mt-5">
                        <div>
                            <Calendar tileDisabled={tileDisabled} onChange={onChange} value={value} selectRange={true}/>
                            {book}
                        </div>
                        <div className="row mt-5">
                            <div className="col-6">
                                <h4 className="display-6">Rent from:</h4> <b>
                                <FaRegCalendarAlt></FaRegCalendarAlt> {start}
                            </b>
                                <h4 className="display-6">Rent until:</h4> <b>
                                <FaRegCalendarAlt></FaRegCalendarAlt> {end}
                            </b>
                            </div>
                            <div className="col-6">
                                <h4 className="display-6">Total price:<p><b>{priceToPay} €</b></p></h4>
                            </div>
                        </div>
                        <div className="row p-2 mt-5"><Link to={`/reviews/${props.accommodation.id}`}
                                                            onClick={() => props.onGetReviews(props.accommodation.id)}
                                                            className="btn"
                                                            style={{background: "black", color: "white"}}>REVIEWS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accommodation;