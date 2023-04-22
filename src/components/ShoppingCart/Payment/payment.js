import React, {useState} from 'react';
import axios from '../../../custom-axios/axios';
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate} from "react-router-dom";

const PaymentForm = (props) => {

    let username = sessionStorage.getItem("username");

    const navigate = useNavigate();

    const [amount, setAmount] = useState(props.amount);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleStripeToken = async (token) => {
        try {
            const response = await axios.post("/api/payment", {
                amount,
                currency: "eur",
                description: "Test charge",
                stripeToken: token.id,
                user: username,
                arrangement: props.arrangement
            });
            console.log(response);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{
            height: "100vh", display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <form onSubmit={handleSubmit} style={{border: "1px solid green"}} className="p-5">
                <input
                    type="text"
                    disabled={true}
                    value={props.amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <StripeCheckout
                    stripeKey="pk_test_51MX80hIsnUFJ6fztzJuVVmdxokOSy4uPoV5m2R5ZaB0HCtIEASaI0eeRdG57rqwJVCwcw9iCKE9ZKssu5HD59Y7v00LPNpYlyu"
                    amount={parseFloat(amount) * 100}
                    token={handleStripeToken}
                />
                {/*<button type="submit">pay</button>*/}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default PaymentForm;