import React from "react";
import {useNavigate} from 'react-router-dom';

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
        <div className="row mt-5" style={{height: "100vh"}}>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
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
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PhotoAdd;