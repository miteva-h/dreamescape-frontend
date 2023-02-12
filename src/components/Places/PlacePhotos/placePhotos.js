import React, {useState} from "react";
import {Link} from "react-router-dom";

const PlacePhotos = (props) => {
    return (
        <div style={{height: "100vh"}}>
            <Link className={"btn btn-block btn-success"} to={`/photos/add/place/${props.place.id}`}>Add new
                photo</Link>
            <div className="row d-flex justify-content-center pt-3">
                {props.photos.map((term) => {
                    return (
                        <div className="card" style={{width: "18rem"}}>
                            <img src={term.photoURL} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a title={"Delete"} className={"btn btn-danger me-1"}
                                   onClick={() => props.onDelete(term.id, props.place.id)}>Delete</a>
                                <Link className={"btn btn-primary"}
                                      onClick={() => props.onGet(term.id)}
                                      to={`/photos/${term.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default PlacePhotos;