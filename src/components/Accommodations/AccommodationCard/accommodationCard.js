import React from "react";
import {Link} from 'react-router-dom';
import {BsFillGeoAltFill} from "react-icons/bs";
import { FaEuroSign } from "react-icons/fa";


const accommodationCard = (props) => {
    return (
        <div className="card me-2 p-0 rounded-0 bg-light" style={{width: "14rem"}}>
            <img src={props.term.photo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" style={{color: "#255f63"}}><b>{props.term.name}</b></h5>
                <h6 className="card-subtitle mb-2 text-muted"><BsFillGeoAltFill></BsFillGeoAltFill>{props.place}</h6>
                <h6 className="card-subtitle mb-2 text-muted text-end">{props.term.pricePerNight}<FaEuroSign></FaEuroSign> /n</h6>
                <Link className={"btn d-block text-white"} style={{background: "#255f63"}}
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
