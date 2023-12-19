import React from "react";
import {useNavigate} from 'react-router-dom';
import marble from "../../../photos/white_marble.avif";

const PhotoAdd = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        photoURL: ""
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const photoURL = formData.photoURL;

        props.onAddPhoto(props.place.id, photoURL);
        navigate(`/photos/place/${props.place.id}`);
    }
    return (
        <div style={{
            backgroundImage: `url(${marble})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
        }}>
            <div className={"container min-vh-100"}>
                <div className="row pt-5" style={{height: "100vh"}}>
                    <div className="col-md-5">
                        <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Add photo</h2>
                        <form onSubmit={onFormSubmit} style={{border: "0.2em solid black", borderRadius: "0.5em"}}
                              className="p-3">
                            <div className="form-group">
                                <label htmlFor="photoURL">Photo URL</label>
                                <input type="text"
                                       className="form-control"
                                       id="photoURL"
                                       name="photoURL"
                                       required
                                       placeholder="Enter photo URL"
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button id="submit" type="submit" className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoAdd;