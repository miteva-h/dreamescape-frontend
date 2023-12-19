import React from "react";
import marble from "../../../photos/white_marble.avif";

const placeAccommodations = (props) => {
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
                <table className="table table-striped mt-3" style={{border: "0.2em solid black"}}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Description</th>
                        <th scope={"col"} style={{whiteSpace: "nowrap"}}>Coordinate x</th>
                        <th scope={"col"} style={{whiteSpace: "nowrap"}}>Coordinate y</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.accommodations.map((term) => {
                            return (
                                <tr key={term.id}>
                                    <td>{term.name}</td>
                                    <td style={{textAlign: "justify"}}>{term.description}</td>
                                    <td>{term.coordinate_x}</td>
                                    <td>{term.coordinate_y}</td>
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

export default placeAccommodations;