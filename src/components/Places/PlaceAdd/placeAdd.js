import React from "react";
import {useNavigate} from 'react-router-dom';

const PlaceAdd = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        location: "",
        description: ""
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const location = formData.location;
        const description = formData.description;

        props.onAddPlace(name, location, description);
        navigate("/places");
    }
    return (
        <div className="row mt-5" style={{height: "100vh"}}>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Destination name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter destination name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Destination location</label>
                        <input type="text"
                               className="form-control"
                               id="location"
                               name="location"
                               required
                               placeholder="Enter destination location"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Destination description</label>
                        <textarea className="form-control"
                                  id="description"
                                  name="description"
                                  placeholder="Enter destination description"
                                  onChange={handleChange}></textarea>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PlaceAdd;