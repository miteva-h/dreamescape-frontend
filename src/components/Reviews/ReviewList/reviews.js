import React, {useEffect, useState} from "react";
import 'react-calendar/dist/Calendar.css';
import {useNavigate} from "react-router-dom";
import {
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
    BsFillFilePersonFill,
    BsFillGeoAltFill
} from "react-icons/bs";
import marble from "../../../photos/white_marble.avif";
import {FaBed, FaEuroSign, FaHamburger} from "react-icons/fa";
import L from "leaflet";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import axios from "../../../custom-axios/axios";

const Review = (props) => {
    const {accommodation} = props;
    const [canLeaveReview, setCanLeaveReview] = useState(null);
    const id = accommodation.id;
    console.log(id);
    useEffect(() => {
        axios.get(`/reviews/${id}/permissionToAdd`)
            .then(result => {
                setCanLeaveReview(result.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(canLeaveReview);
    const [coordinatesAvailable, setCoordinatesAvailable] = useState(false);
    const [typesAvailable, setTypesAvailable] = useState(false);
    const [typeOfBoard, setTypeOfBoard] = useState("");
    const [typeOfAccommodation, setTypeOfAccommodation] = useState("");

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

    let username = sessionStorage.getItem("username");
    let role = sessionStorage.getItem("role");

    let stars = [1, 3, 5]

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        reviewText: "",
        stars: 1
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const reviewText = formData.reviewText;
        const stars = formData.stars;

        props.onAddReview(reviewText, stars, username, props.accommodation.id);
        updateFormData({
            reviewText: "",
            stars: 1
        });
        document.getElementById('review-form').reset();
        navigate(`/reviews/${props.accommodation.id}`);
    }

    let review;
    if (role != null && role === "USER" && canLeaveReview === true) {
        review = (
            <div>
                <form id="review-form" onSubmit={onFormSubmit}>
                    <fieldset className="rounded p-3 text-white w-100"
                              style={{border: "0.2em solid black", backgroundColor: "black"}}>
                        <div className="form-group">
                            <label htmlFor="text" className="pb-2"><b className="fst-italic">Review
                                -------- </b></label>
                            <input type="text"
                                   className="form-control"
                                   id="reviewText"
                                   name="reviewText"
                                   required
                                   value={formData.reviewText}
                                   placeholder="Enter review text"
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group pb-2 mt-2">
                            <label className="d-block mb-1"><b className="fst-italic">Rating --------</b></label>
                            {stars.map((term, index) => (
                                <span key={index} className="pe-5 pb-2">
                                    <input
                                        type="radio"
                                        name="stars"
                                        value={term}
                                        onChange={handleChange}
                                    />

                                    {term === 1 ?
                                        <span><BsFillEmojiFrownFill fontSize='1.5em'
                                                                    color="yellow"></BsFillEmojiFrownFill></span> : term === 3 ?
                                            <span><BsFillEmojiNeutralFill fontSize='1.5em'
                                                                          color="yellow"></BsFillEmojiNeutralFill></span> :
                                            <span><BsFillEmojiSmileFill fontSize='1.5em'
                                                                        color="yellow"></BsFillEmojiSmileFill></span>}
                                </span>
                            ))}
                        </div>
                        <button id="submit" type="submit" className="btn btn-dark border-light mt-2">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    } else {
        review = (<span></span>);
    }

    return (
        <div style={{
            backgroundImage: `url(${marble})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
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
                    <div className="col-8 mb-5">
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
                    </div>
                    <div className="col-4 h-auto mt-5 w-auto">
                        <div className="float-start w-100 h-auto">
                            {review}
                            {props.reviews.length > 0 ? <table className="table mt-3 w-auto" style={{
                                    borderCollapse: "collapse",
                                }}>
                                    <thead>
                                    <tr style={{borderBottom: "1px solid grey"}}>
                                        <th className="bg-black text-white">USER</th>
                                        <th className="bg-black text-white border-start">REVIEWS</th>
                                        <th className="bg-black text-white border-start">RATING</th>
                                        <th className="bg-black text-white"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.reviews.map((term) => {
                                            return (
                                                <tr style={{borderBottom: "1px solid grey"}}>
                                                    <td><BsFillFilePersonFill></BsFillFilePersonFill>{term.user.username}
                                                    </td>
                                                    <td>{term.reviewText}</td>
                                                    <td className="text-center">
                                                        {term.stars === 1 ?
                                                            <span><BsFillEmojiFrownFill></BsFillEmojiFrownFill></span> : term.stars === 3 ?
                                                                <span><BsFillEmojiNeutralFill></BsFillEmojiNeutralFill></span> :
                                                                <span><BsFillEmojiSmileFill></BsFillEmojiSmileFill></span>}
                                                    </td>
                                                    <td> {
                                                        username != null && term.user.username === username
                                                            ? <button title={"Delete"} className={"btn btn-danger me-1"}
                                                                      onClick={() => props.onDeleteReview(term.id, props.accommodation.id)}>Delete</button>
                                                            : <span></span>
                                                    }</td>
                                                </tr>
                                            );
                                        }
                                    )}
                                    </tbody>
                                </table> :
                                <div className="fw-bold pt-5"><i>There are no reviews for this estate.</i></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
