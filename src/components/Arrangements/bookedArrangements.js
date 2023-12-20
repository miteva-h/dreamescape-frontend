import React from "react";

const bookedArrangements = (props) => {
    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
        }}>
            <div className={"container min-vh-100"}>
                <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Booked Arrangements</h2>
                <table className={"table table-striped mt-3"} style={{border: "0.2em solid black"}}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Villa</th>
                        <th scope={"col"}>Destination</th>
                        <th scope={"col"}>From date</th>
                        <th scope={"col"}>To date</th>
                        <th scope={"col"}>Price</th>
                        <th scope={"col"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.arrangements.map((term) => {
                        console.log(term)
                            return (
                                <tr key={term.id}>
                                    <td>{term.arrangement.accommodation.name}</td>
                                    <td>{term.arrangement.accommodation.destination}</td>
                                    <td>{term.from_date}</td>
                                    <td>{term.to_date}</td>
                                    <td>{`${term.price} €`}</td>
                                    {new Date()>=new Date(term.from_date)-432000000 ? <td className="w-auto text-center fw-bold" style={{color:"red"}}>
                                        <p>This arrangement is in less than 5 days. Want to cancel?</p>
                                        <p><button title={"Delete"} className={"btn btn-danger w-auto display-block"}
                                                onClick={() => props.onDelete(term.id)}>Cancel
                                        </button></p>
                                    </td>:<td></td>}
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

export default bookedArrangements;