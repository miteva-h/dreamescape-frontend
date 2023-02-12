import React from "react";

const placeAccommodations = (props) => {
    return (
        <div className={"container"} style={{height: "100vh"}}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope={"col"}>Name</th>
                </tr>
                </thead>
                <tbody>
                {props.accommodations.map((term) => {
                        return (
                            <tr key={term.id}>
                                <td>{term.name}</td>
                            </tr>
                        );
                    }
                )}
                </tbody>
            </table>
        </div>
    );
}

export default placeAccommodations;