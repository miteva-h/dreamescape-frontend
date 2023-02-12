import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Link} from "react-router-dom";
import {FaRegCalendarAlt} from "react-icons/fa";


const Accommodation = (props) => {

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
        if (d.length == 1) {
            d = "0" + d;
        }
        if (m.length == 1) {
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

        var e = new Date(end);
        e = dateToString(e.getDate(), e.getMonth() + 1, e.getFullYear());

    }

    var s = new Date(start);
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
            <Link to={"/shoppingcart"}
                  onClick={() => props.onAddArrangement(s, e, props.accommodation.id, priceToPay, username)}
                  className="btn btn-primary w-50 ms-3 mt-1">Book</Link>
        );
    }


    return (
        <div style={{
            height: "110vh",
            backgroundImage: "url(" + "https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?size=626&ext=jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: "0.9",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className={"container"} style={{
                height: "100vh", display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="float-start w-50 h-auto pe-3" style={{
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'end'
                }}>
                    <img src={props.accommodation.photo} style={{width: "80%", height: "auto"}} className="pe-0"/>
                </div>
                <div className="float-start w-50 h-auto">
                    <table className="table" style={{borderCollapse: "collapse", background: "#cbebf5"}}>
                        <tr style={{borderBottom: "1px solid grey"}}>
                            <td className="ps-3">Name:</td>
                            <td><b>{props.accommodation.name}</b></td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                            <td className="ps-3">Type of accommodation:</td>
                            <td><b>{props.accommodation.typeOfAccommodation}</b></td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                            <td className="ps-3">Type of board:</td>
                            <td><b>{props.accommodation.typeOfBoard}</b></td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                            <td className="ps-3">Description:</td>
                            <td><b>{props.accommodation.description}</b></td>
                        </tr>
                        <tr style={{borderBottom: "1px solid grey"}}>
                            <td className="ps-3">Price per night:</td>
                            <td><b>{props.accommodation.pricePerNight} €</b></td>
                        </tr>
                        <tr>
                            <td className="p-2"><Link to={`/reviews/${props.accommodation.id}`}
                                                      onClick={() => props.onGetReviews(props.accommodation.id)}
                                                      className="btn btn-light">REVIEWS</Link></td>
                        </tr>
                    </table>
                    <div>
                        <Calendar tileDisabled={tileDisabled} onChange={onChange} value={value} selectRange={true}/>
                        {book}
                    </div>
                    <div style={{background: "#cbebf5"}} className="row mt-1">
                        <div className="col-6">
                            <h4 className="display-6">Rent from:</h4> <b> <FaRegCalendarAlt></FaRegCalendarAlt> {start}
                        </b>
                            <h4 className="display-6">Rent until:</h4> <b> <FaRegCalendarAlt></FaRegCalendarAlt> {end}
                        </b>
                        </div>
                        <div className="col-6">
                            <h4 className="display-6">Total price:<p><b>{priceToPay} €</b></p></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accommodation;