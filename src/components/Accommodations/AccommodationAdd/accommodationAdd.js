import React from "react";
import {useNavigate} from 'react-router-dom';

const AccommodationAdd = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        typeOfAccommodation: props.typesOfAccommodation[0].value,
        typeOfBoard: props.typesOfBoard[0].value,
        description: "",
        place: props.places[0].id,
        pricePerNight: 0,
        photo: ""
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
        const typeOfAccommodation = formData.typeOfAccommodation;
        const typeOfBoard = formData.typeOfBoard;
        const description = formData.description;
        const place = formData.place;
        const pricePerNight = formData.pricePerNight;
        const photo = formData.photo;

        props.onAddAccommodation(name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo);
        navigate("/accommodations");
    }
    return (
        <div className="row mt-5" style={{height: "100vh"}}>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Accommodation name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter accommodation name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type of accommodation</label>
                        <select name="typeOfAccommodation" className="form-control" onChange={handleChange}>
                            {props.typesOfAccommodation.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Type of board</label>
                        <select name="typeOfBoard" className="form-control" onChange={handleChange}>
                            {props.typesOfBoard.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Accommodation description</label>
                        <textarea className="form-control"
                                  id="description"
                                  name="description"
                                  placeholder="Enter accommodation description"
                                  onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Place</label>
                        <select name="place" className="form-control" onChange={handleChange}>
                            {props.places.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pricePerNight">Price per night</label>
                        <input type="number"
                               className="form-control"
                               id="pricePerNight"
                               name="pricePerNight"
                               required
                               placeholder="Price per night"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Photo</label>
                        <input type="text"
                               className="form-control"
                               id="photo"
                               name="photo"
                               required
                               placeholder="Photo"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default AccommodationAdd;