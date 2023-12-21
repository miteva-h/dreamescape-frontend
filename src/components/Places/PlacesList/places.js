import React from "react";
import {Link} from "react-router-dom";
import marble from "../../../photos/white_marble.avif";

const places = (props) => {
    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
        }}>
            <div className={"container min-vh-100"}>
                <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Destinations</h2>
                <Link className={"btn btn-block btn-success mt-3"} to={"/places/add"}>Add new destination</Link>
                <table className={"table table-striped mt-3"} style={{border: "0.2em solid black"}}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Description</th>
                        <th scope={"col"} style={{whiteSpace:"nowrap"}}>Coordinate x</th>
                        <th scope={"col"} style={{whiteSpace:"nowrap"}}>Coordinate y</th>
                        <th scope={"col"}></th>
                        <th scope={"col"}></th>
                        <th scope={"col"}></th>
                        <th scope={"col"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.places.map((term) => {
                            return (
                                <tr key={term.id}>
                                    <td>{term.name}</td>
                                    <td style={{textAlign:"justify"}}>{term.description}</td>
                                    <td>{term.coordinate_x}</td>
                                    <td>{term.coordinate_y}</td>
                                    <td className="w-auto">
                                        <button title={"Delete"} className={"btn btn-danger w-auto"}
                                                onClick={() => props.onDelete(term.id)}>Delete
                                        </button>
                                    </td>
                                    <td><Link className={"btn btn-primary w-auto"}
                                              onClick={() => props.onGet(term.id)}
                                              to={`/places/${term.id}/edit`}>
                                        Edit
                                    </Link></td>
                                    <td><Link className={"btn btn-secondary w-auto"}
                                              onClick={() => {
                                                  props.onGetPhotos(term.id);
                                                  props.onGet(term.id);
                                              }}
                                              to={`/photos/place/${term.id}`}>
                                        Gallery
                                    </Link></td>
                                    <td><Link className={"btn btn-secondary"}
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
        </div>
    );
}

export default places;