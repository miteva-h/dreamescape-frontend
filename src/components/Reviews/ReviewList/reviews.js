import React from "react";
import 'react-calendar/dist/Calendar.css';
import {useNavigate} from "react-router-dom";
import {BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill, BsFillFilePersonFill} from "react-icons/bs";

const Review = (props) => {

    let username = sessionStorage.getItem("username");
    let role = sessionStorage.getItem("role");

    let stars = [1, 3, 5]

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        reviewText: "",
        stars: 1
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const reviewText = formData.reviewText;
        const stars = formData.stars;

        props.onAddReview(reviewText, stars, username, props.accommodation.id);
        navigate(`/reviews/${props.accommodation.id}`);
    }

    let review;
    if (role != null && role === "USER") {
        review = (
            <div>
                <form onSubmit={onFormSubmit}>
                    <fieldset className="rounded p-3"
                              style={{border: "2px solid grey", backgroundColor: "#cbebf5"}}>
                        <div className="form-group">
                            <label htmlFor="text" className="pb-2"><b>Review :</b></label>
                            <input type="text"
                                   className="form-control"
                                   id="reviewText"
                                   name="reviewText"
                                   required
                                   placeholder="Enter review text"
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <label className="d-block"><b>Rating :</b></label>
                            {stars.map((term, index) => (
                                <span key={index} className="pe-5 pb-2">
                                    <input
                                        type="radio"
                                        name="stars"
                                        value={term}
                                        onChange={handleChange}
                                    />
                                    {term === 1 ?
                                        <span><BsFillEmojiFrownFill></BsFillEmojiFrownFill></span> : term === 3 ?
                                            <span><BsFillEmojiNeutralFill></BsFillEmojiNeutralFill></span> :
                                            <span><BsFillEmojiSmileFill></BsFillEmojiSmileFill></span>}
                                </span>
                            ))}
                        </div>
                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    } else {
        review = (<span></span>);
    }

    return (
        <div style={{
            height: "110vh",
            backgroundImage: "url(https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?size=626&ext=jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: "0.9",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className={"container"} style={{
                height: "100vh", display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="float-start w-50 h-auto pe-3" style={{
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'end'
                }}>
                    <img src={props.accommodation.photo} alt={props.accommodation.name} style={{width: "80%", height: "auto"}} className="pe-0"/>

                </div>
                <div className="float-start w-50 h-auto">
                    {review}

                    <table className="table mt-3" style={{borderCollapse: "collapse", background: "#cbebf5"}}>
                        <thead>
                        <tr style={{borderBottom: "1px solid grey"}}>
                            <th>User</th>
                            <th>Review</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.reviews.map((term) => {
                                console.log(term);
                                return (
                                    <tr style={{borderBottom: "1px solid grey"}}>
                                        <td><BsFillFilePersonFill></BsFillFilePersonFill>{term.user.username}</td>
                                        <td>{term.reviewText}</td>
                                        <td>
                                            {term.stars === 1 ?
                                                <span><BsFillEmojiFrownFill></BsFillEmojiFrownFill></span> : term.stars === 3 ?
                                                    <span><BsFillEmojiNeutralFill></BsFillEmojiNeutralFill></span> :
                                                    <span><BsFillEmojiSmileFill></BsFillEmojiSmileFill></span>}
                                        </td>
                                        <td> {
                                            username != null && term.user.username === username
                                                ? <button title={"Delete"} className={"btn btn-danger me-1"}
                                                     onClick={() => props.onDeleteReview(term.id, props.accommodation.id)}>Delete</button>
                                                : <span></span>
                                        }</td>
                                    </tr>
                                );
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Review;
