import React from "react";
import {Link} from 'react-router-dom';
import {BsFillGeoAltFill} from "react-icons/bs";
import {FaEuroSign} from "react-icons/fa";


const accommodationCard = (props) => {
    return (
        <div className="card me-2 p-0  mt-2 bg-light" style={{width: "14rem", border: "0.3em solid black"}}>
            <img src={props.term.photo} className="card-img-top rounded-0" style={{height: "10rem"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>{props.term.name}</b></h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <BsFillGeoAltFill></BsFillGeoAltFill>{props.term.destination}</h6>
            </div>
            <div className={"card-footer m-2"}>
                <h6 className="card-subtitle mb-2 text-muted text-end">{props.term.pricePerNight}<FaEuroSign></FaEuroSign> /n
                </h6>
                <Link className={"btn d-block text-white"} style={{background: "black"}}
                      onClick={() => {
                          props.onGet(props.term.id);
                          props.onGetDates(props.term.id)
                      }}
                      to={`/accommodation/${props.term.id}`}>
                    Details
                </Link>
            </div>
        </div>
    );
}

export default accommodationCard;
