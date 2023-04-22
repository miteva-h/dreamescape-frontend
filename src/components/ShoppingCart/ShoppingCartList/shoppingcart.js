import React from "react";
import {Link} from "react-router-dom";

const ShoppingCart = (props) => {

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
                        <th scope={"col"}>Total Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.arrangements.map((term) => {
                            return (
                                <tr key={term.id} style={{borderBottom: "2px solid grey"}}>
                                    <td>{term.arrangement.accommodation.name}</td>
                                    <td><img src={term.arrangement.accommodation.photo}
                                             alt={term.arrangement.accommodation.name}
                                             style={{height: "40px", width: "40px"}}/></td>
                                    <td>{term.from_date}</td>
                                    <td>{term.to_date}</td>
                                    <td>{term.price} €</td>
                                    <td>
                                        <button title={"Delete"} className={"btn btn-danger me-1"}
                                           onClick={() => props.onDelete(term.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <Link to={"/payment"} onClick={()=>props.onGetInfo(term.price, term.id)} className="btn btn-light">PAY</Link>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    </tbody>
                </table>
            </div>
            <div className="col-2"></div>
        </div>
    );
}

export default ShoppingCart;