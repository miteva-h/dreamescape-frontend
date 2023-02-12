import React from "react";
import {useNavigate} from 'react-router-dom';

const PlaceEdit = (props) => {
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
        const name = formData.name !== "" ? formData.name : props.place.name;
        const location = formData.location !== "" ? formData.location : props.place.location;
        const description = formData.description !== "" ? formData.description : props.place.description;

        props.onEditPlace(props.place.id, name, location, description);
        navigate("/places");
    }

    return (
        <div className="row mt-5" style={{height:"100vh"}}>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Destination name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.place.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Destination location</label>
                        <input type="text"
                               className="form-control"
                               id="location"
                               name="location"
                               placeholder={props.place.location}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Destination description</label>
                        <textarea className="form-control"
                                  id="description"
                                  name="description"
                                  placeholder={props.place.description}
                                  onChange={handleChange}></textarea>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )


}

export default PlaceEdit;