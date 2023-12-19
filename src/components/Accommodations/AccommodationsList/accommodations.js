import React from "react";
import {Link} from "react-router-dom";
import marble from "../../../photos/white_marble.avif";

const accommodations = (props) => {
    return (
        <div style={{
            backgroundImage: `url(${marble})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
        }}>
            <div className={"container min-vh-100"}>
                <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Accommodations</h2>
                <Link className={"btn btn-block btn-success mt-3"} to={"/accommodations/add"}>Add new
                    accommodation</Link>
                <table className="table table-striped mt-3" style={{border: "0.2em solid black"}}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Photo</th>
                        <th scope={"col"}>TypeOfAccommodation</th>
                        <th scope={"col"}>TypeOfBoard</th>
                        <th scope={"col"}>Sleeps</th>
                        <th scope={"col"}>Destination</th>
                        <th scope={"col"} style={{whiteSpace: "nowrap"}}>Coordinate x</th>
                        <th scope={"col"} style={{whiteSpace: "nowrap"}}>Coordinate x</th>
                        <th scope={"col"}>Place</th>
                        <th scope={"col"}>PricePerNight</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.accommodations.map((term) => {
                            return (
                                <React.Fragment key={term.id}>
                                    <tr>
                                        <td>{term.name}</td>
                                        <td><img src={term.photo} alt={term.name} style={{height: "6em", width: "6em"}}/>
                                        </td>
                                        <td>{term.typeOfAccommodation}</td>
                                        <td>{term.typeOfBoard}</td>
                                        <td>{term.sleeps}</td>
                                        <td>{term.destination}</td>
                                        <td>{term.coordinate_x}</td>
                                        <td>{term.coordinate_y}</td>
                                        <td>{term.place.name}</td>
                                        <td>{term.pricePerNight} €/n</td>
                                        <td>
                                            <Link className={"btn btn-primary mb-1"}
                                                  onClick={() => props.onGet(term.id)}
                                                  to={`/accommodations/${term.id}/edit`}>
                                                Edit
                                            </Link>
                                            <button title={"Delete"} className={"btn btn-danger me-1"}
                                                    onClick={() => props.onDelete(term.id)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="11" className="w-100"
                                            style={{textAlign: "justify", columnSpan: "inherit"}}>{term.description}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            );
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default accommodations;