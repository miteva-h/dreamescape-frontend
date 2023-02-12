import React from "react";
import {Link} from "react-router-dom";

const accommodations = (props) => {
    return (
        <div className={"container"} style={{height: "100vh"}}>
            <Link className={"btn btn-block btn-success"} to={"/accommodations/add"}>Add new accommodation</Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>Photo</th>
                    <th scope={"col"}>TypeOfAccommodation</th>
                    <th scope={"col"}>TypeOfBoard</th>
                    <th scope={"col"}>Description</th>
                    <th scope={"col"}>Place</th>
                    <th scope={"col"}>PricePerNight</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {props.accommodations.map((term) => {
                        return (
                            <tr key={term.id}>
                                <td>{term.name}</td>
                                <td><img src={term.photo} style={{height: "30px", width: "30px"}}/></td>
                                <td>{term.typeOfAccommodation}</td>
                                <td>{term.typeOfBoard}</td>
                                <td>{term.description}</td>
                                <td>{term.place.name}</td>
                                <td>{term.pricePerNight}</td>
                                <td>
                                    <a title={"Delete"} className={"btn btn-danger me-1"}
                                       onClick={() => props.onDelete(term.id)}>Delete</a>
                                </td>
                                <td>
                                    <Link className={"btn btn-primary"}
                                          onClick={() => props.onGet(term.id)}
                                          to={`/accommodations/${term.id}/edit`}>
                                        Edit
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

export default accommodations;