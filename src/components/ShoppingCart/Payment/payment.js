import React, {useState} from 'react';
import axios from '../../../custom-axios/axios';
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate} from 'react-router-dom';

const PaymentForm = (props) => {

    let username = sessionStorage.getItem('username');
    const navigate = useNavigate();

    const [amount, setAmount] = useState(props.amount);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleStripeToken = async (token) => {
        try {
            const response = await axios.post('/api/payment', {
                amount,
                currency: 'eur',
                description: 'Test charge',
                stripeToken: token.id,
                user: username,
                arrangement: props.arrangement,
            });
            console.log(response);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    border: '0.5em solid black',
                    padding: '2em',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    maxWidth: '50%',
                    width: '100%',
                    height: '50%',
                    textAlign: 'center'
                }}
            >
                <h2 style={{marginBottom: '1em', color: '#333'}}>PAY FOR YOUR STAY</h2>
                <input
                    type="text"
                    disabled={true}
                    value={props.amount + ".00 €"}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{width: '60%', padding: '0.5em', marginBottom: '1em'}}
                />
                <StripeCheckout
                    stripeKey="pk_test_51MX80hIsnUFJ6fztzJuVVmdxokOSy4uPoV5m2R5ZaB0HCtIEASaI0eeRdG57rqwJVCwcw9iCKE9ZKssu5HD59Y7v00LPNpYlyu"
                    amount={parseFloat(amount) * 100}
                    token={handleStripeToken}
                    style={{width: '60%'}}
                />
                <div className="mt-5 fs-5 fw-bold" style={{fontFamily:"Georgia"}}>Please confirm your stay by completing the payment for your accommodation.
                    Kindly provide your contact email and credit card information to finalize your reservation securely.</div>
                {error && <p style={{color: 'red', marginTop: '1em'}}>{error}</p>}
            </form>
        </div>
    );
};

export default PaymentForm;
