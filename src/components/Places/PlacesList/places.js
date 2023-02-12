import React from "react";
import {Link} from "react-router-dom";

const places = (props) => {
    return (
        <div className={"container"} style={{height: "100vh"}}>
            <Link className={"btn btn-block btn-success"} to={"/places/add"}>Add new destination</Link>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>Location</th>
                    <th scope={"col"}></th>
                </tr>
                </thead>
                <tbody>
                {props.places.map((term) => {
                        return (
                            <tr key={term.id}>
                                <td>{term.name}</td>
                                <td>{term.location}</td>
                                <td>
                                    <a title={"Delete"} className={"btn btn-danger me-1"}
                                       onClick={() => props.onDelete(term.id)}>Delete</a>
                                    <Link className={"btn btn-primary"}
                                          onClick={() => props.onGet(term.id)}
                                          to={`/places/${term.id}/edit`}>
                                        Edit
                                    </Link>
                                    <Link className={"btn btn-secondary ms-1"}
                                          onClick={() => {
                                              props.onGetPhotos(term.id);
                                              props.onGet(term.id);
                                          }}
                                          to={`/photos/place/${term.id}`}>
                                        Gallery
                                    </Link>
                                    <Link className={"btn btn-secondary ms-1"}
                                          onClick={() =>
                                              props.onGetAccommodations(term.id)
                                          }
                                          to={`/accommodations/place/${term.id}`}>
                                        Accommodation
                                    </Link>
                                </td>
                            </tr>
                        );
                    }
                )}
                </tbody>
            </table>
        </div>
    );
}

export default places;