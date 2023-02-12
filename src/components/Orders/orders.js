import React from "react";

const Order = (props) => {

    var len = props.arrangementsInOrder.length;

    return (
        <div style={{
            height: "90vh", width: "100%", overflow: "hidden"
        }} className="row">
            <div className="col-2"></div>
            <div className="col-8 mb-5" style={{background: "#cbebf5"}}>
                <table className="table table-striped" style={{borderCollapse: "collapse", background: "#cbebf5"}}>
                    <thead>
                    <tr style={{borderBottom: "2px solid grey"}}>
                        <th scope={"col"}>Accommodation</th>
                        <th scope={"col"}>Photo</th>
                        <th scope={"col"}>From Date</th>
                        <th scope={"col"}>To Date</th>
                        <th scope={"col"}>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.arrangementsInOrder.map((term) => {
                            return (
                                <tr key={term.id} style={{borderBottom: "2px solid grey"}}>
                                    <td>{term.arrangement.accommodation.name}</td>
                                    <td><img src={term.arrangement.accommodation.photo}
                                             style={{height: "40px", width: "40px"}}/></td>
                                    <td>{term.from_date}</td>
                                    <td>{term.to_date}</td>
                                    <td>{term.price} €</td>
                                    <td>
                                        <button className="btn btn-success disabled">PAID</button>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    </tbody>
                    {len > 0
                        ? <tfoot>
                        <tr>
                            <td>Total cost: <b>{Number(props.totalPrice).toFixed(2)} € </b></td>
                        </tr>
                        </tfoot>
                        : <span></span>}

                </table>
            </div>
            <div className="col-2"></div>
        </div>
    );
}

export default Order;