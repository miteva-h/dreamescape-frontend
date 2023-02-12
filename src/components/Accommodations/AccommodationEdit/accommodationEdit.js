import React from "react";
import {useNavigate} from 'react-router-dom';

const AccommodationEdit = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        typeOfAccommodation: "HOTEL",
        typeOfBoard: "NONE",
        description: "",
        place: 1,
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
        const name = formData.name !== "" ? formData.name : props.accommodation.name;
        const typeOfAccommodation = formData.typeOfAccommodation !== "HOTEL" ? formData.typeOfAccommodation : props.accommodation.typeOfAccommodation;
        const typeOfBoard = formData.typeOfBoard !== "NONE" ? formData.typeOfBoard : props.accommodation.typeOfBoard;
        const description = formData.description !== "" ? formData.description : props.accommodation.description;
        const place = formData.place !== 1 ? formData.place : props.accommodation.place.id;
        const pricePerNight = formData.pricePerNight !== 0 ? formData.pricePerNight : props.accommodation.pricePerNight;
        const photo = formData.photo !== "" ? formData.photo : props.accommodation.photo;

        props.onEditAccommodation(props.accommodation.id, name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo);
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
                               placeholder={props.accommodation.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type of accommodation</label>
                        <select name="typeOfAccommodation" className="form-control" onChange={handleChange}>
                            {props.typesOfAccommodation.map((term) => {
                                if (props.accommodation.typeOfAccommodation !== undefined &&
                                    props.accommodation.typeOfAccommodation === term)
                                    return <option selected={props.accommodation.typeOfAccommodation}
                                                   value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Type of board</label>
                        <select name="typeOfBoard" className="form-control" onChange={handleChange}>
                            {props.typesOfBoard.map((term) => {
                                if (props.accommodation.typeOfBoard !== undefined &&
                                    props.accommodation.typeOfBoard === term)
                                    return <option selected={props.accommodation.typeOfBoard}
                                                   value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Accommodation description</label>
                        <textarea className="form-control"
                                  id="description"
                                  name="description"
                                  placeholder={props.accommodation.description}
                                  onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Place</label>
                        <select name="place" className="form-control" onChange={handleChange}>
                            {props.places.map((term) => {
                                if (props.accommodation.place !== undefined &&
                                    props.accommodation.place.id === term.id)
                                    return <option selected={props.accommodation.place.id}
                                                   value={term.id}>{term.name}</option>
                                else return <option value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pricePerNight">Price per night</label>
                        <input type="text"
                               className="form-control"
                               id="pricePerNight"
                               name="pricePerNight"
                               required
                               placeholder={props.accommodation.pricePerNight}
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
                               placeholder={props.accommodation.photo}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default AccommodationEdit;