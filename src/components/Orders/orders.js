import React from "react";
import axios from "../../custom-axios/axios";

const Order = ({arrangementsInOrder, totalPrice}) => {
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

    const renderArrangementRows = arrangementsInOrder.map((term) => (
        <tr key={term.id} style={{borderBottom: "0.2em solid grey"}}>
            <td>{term.arrangement.accommodation.name}</td>
            <td>
                <img
                    src={term.arrangement.accommodation.photo}
                    alt={term.arrangement.accommodation.name}
                    style={{height: "40px", width: "40px"}}
                />
            </td>
            <td>{term.fromDate}</td>
            <td>{term.toDate}</td>
            <td>{`${term.price} €`}</td>
            <td>
                <button className="btn btn-success disabled" style={{border: "0.1em solid black"}}>PAID</button>
            </td>
            <td>
                <button className="btn btn-danger"
                        style={{border: "0.1em solid black"}}
                        onClick={() => handleClick(term.id)}>INVOICE
                </button>
            </td>
        </tr>
    ));

    const renderArrangements = () => {
        return (
            <table className="table table-striped" style={{borderCollapse: "collapse"}}>
                <thead>
                <tr style={{borderBottom: "0.2em solid grey"}}>
                    <th scope="col">Accommodation</th>
                    <th scope="col">Photo</th>
                    <th scope="col">From Date</th>
                    <th scope="col">To Date</th>
                    <th scope="col">Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {renderArrangementRows}
                </tbody>
                <tfoot>
                <tr>
                    <td>Total cost: <b>{Number(totalPrice).toFixed(2)} € </b></td>
                </tr>
                </tfoot>
            </table>
        );
    };

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
                {arrangementsInOrder.length > 0 ? <div className="row w-auto" style={{minHeight: "90vh"}}>
                    <div className="col-2"></div>
                    <div className="col-8 mb-5 "
                         style={{background: "white", border: "0.3em solid black", minWidth: "fit-content"}}>
                        {renderArrangements()}
                    </div>

                    <div className="col-2"></div>
                </div> : <div className="fw-bolder pt-5" style={{minHeight: "90vh"}}><h2><i>There are no accommodations
                    paid.</i>
                </h2>
                </div>}
            </div>
        </div>
    );
};

export default Order;