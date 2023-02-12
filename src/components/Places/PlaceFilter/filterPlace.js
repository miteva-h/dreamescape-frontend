import React from "react";
import {Link} from "react-router-dom";
import {BsFillGeoAltFill} from "react-icons/bs";

const filterPlaces = (props) => {
    return (
        <div style={{background: "linear-gradient(to bottom, #fcfccc 30%, #7db7b8 70%)", height: "100vh"}}>
            <div className="container pt-5">
                <div className={"row"}>
                    {props.places.map((term) => {
                            return (
                                <div className="card me-2 p-0 rounded-0 bg-light" style={{width: "14rem", height: "15rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color: "#255f63"}}><b>{term.name}</b></h5>
                                        <h6 className="card-subtitle mb-5 text-muted">
                                            <BsFillGeoAltFill></BsFillGeoAltFill>{term.location}</h6>
                                        <Link className={"btn d-block text-white"} style={{background: "#255f63"}}
                                              onClick={() => {
                                                  props.onGet(term.id);
                                                  props.onGetPhotos(term.id);
                                                  props.onGetAccommodations(term.id);
                                              }}
                                              to={`/places/${term.id}`}>
                                            See
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default filterPlaces;