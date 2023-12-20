import React from "react";
import axios from "../../custom-axios/axios";
import {BsFillFilePersonFill} from "react-icons/bs";

const paidArrangements = (props) => {
    const handleClick = async (id) => {
        try {
            const response = await axios.post('/invoices', {id}, {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'document.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error generating PDF', error);
        }
    }
    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
        }}>
            <div className={"container min-vh-100"}>
                <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Paid Arrangements</h2>
                <table className={"table table-striped mt-3"} style={{border: "0.2em solid black"}}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Villa</th>
                        <th scope={"col"}>Destination</th>
                        <th scope={"col"}>From date</th>
                        <th scope={"col"}>To date</th>
                        <th scope={"col"}>Customer</th>
                        <th scope={"col"}>Price</th>
                        <th scope={"col"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.arrangements.map((term) => {
                            return (
                                <tr key={term.id}>
                                    <td>{term.arrangement.accommodation.name}</td>
                                    <td>{term.arrangement.accommodation.destination}</td>
                                    <td>{term.fromDate}</td>
                                    <td>{term.toDate}</td>
                                    <td><BsFillFilePersonFill></BsFillFilePersonFill>{term.order.user.username}</td>
                                    <td>{`${term.price} €`}</td>
                                    <td>
                                        <button className="btn btn-danger"
                                                style={{border: "0.1em solid black"}}
                                                onClick={() => handleClick(term.id)}>INVOICE
                                        </button>
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

export default paidArrangements;