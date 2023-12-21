import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ShoppingCart = (props) => {

    const [arrangements, setArrangements] = useState(props.arrangements);

    useEffect(() => {
        setArrangements(props.arrangements);
    }, [props.arrangements]);


    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: "auto",
            width: "100%"
        }}>
            <div className="container pt-5">
                <div className="row d-flex text-center mb-3 fw-bolder">
                    <div className="col-2"></div>
                    <div className="col-8" style={{color: "red"}}>You must pay for your stay no later than 5 days before
                        it starts, or else your arrangements may be canceled.
                    </div>
                    <div className="col-2"></div>
                </div>
                {arrangements.length > 0 ? <div className="row w-auto" style={{minHeight: "90vh"}}>
                    <div className="col-2"></div>
                    <div className="col-8 mb-5 "
                         style={{background: "white", border: "0.3em solid black", minWidth: "fit-content"}}>
                        <table className="table table-striped w-100"
                               style={{borderCollapse: "collapse", background: "black"}}>
                            <thead>
                            <tr style={{borderBottom: "0.2em solid grey"}}>
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
                            {arrangements.map((term) => {
                                    return (
                                        <tr key={term.id} style={{borderBottom: "0.2em solid grey"}}>
                                            <td>{term.arrangement.accommodation.name}</td>
                                            <td><img src={term.arrangement.accommodation.photo}
                                                     alt={term.arrangement.accommodation.name}
                                                     style={{height: "4em", width: "4em"}}/></td>
                                            <td>{term.from_date}</td>
                                            <td>{term.to_date}</td>
                                            <td>{term.price} €</td>
                                            <td>
                                                <button title={"Delete"} className={"btn btn-danger me-1"}
                                                        onClick={() => props.onDelete(term.id)}>Cancel
                                                </button>
                                            </td>
                                            <td>
                                                <Link to={"/payment"} onClick={() => props.onGetInfo(term.price, term.id)}
                                                      className="btn btn-secondary">PAY</Link>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-2"></div>
                </div> : <div className="fw-bolder pt-5" style={{minHeight: "90vh"}}><h2><i>There are no accommodations
                    booked.</i></h2></div>
                }
            </div>
        </div>
    );
}

export default ShoppingCart;