import React from "react";
import {useNavigate} from 'react-router-dom';

const AccommodationEdit = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        typeOfAccommodation: "HOTEL",
        typeOfBoard: "NONE",
        sleeps: 0,
        destination: "",
        description: "",
        coordinate_x: 0,
        coordinate_y: 0,
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
        const sleeps = formData.sleeps !== 0 ? formData.sleeps : props.accommodation.sleeps;
        const destination = formData.destination !== "" ? formData.destination : props.accommodation.destination;
        const description = formData.description !== "" ? formData.description : props.accommodation.description;
        const coordinate_x = formData.coordinate_x !== 0 ? formData.coordinate_x : props.accommodation.coordinate_x;
        const coordinate_y = formData.coordinate_y !== 0 ? formData.coordinate_y : props.accommodation.coordinate_y;
        const place = formData.place !== 1 ? formData.place : props.accommodation.place.id;
        const pricePerNight = formData.pricePerNight !== 0 ? formData.pricePerNight : props.accommodation.pricePerNight;
        const photo = formData.photo !== "" ? formData.photo : props.accommodation.photo;

        props.onEditAccommodation(props.accommodation.id, name, typeOfAccommodation, typeOfBoard, sleeps, destination, description, coordinate_x, coordinate_y, place, pricePerNight, photo);
        navigate("/accommodations");
    }
    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
        }}>
            <div className={"container min-vh-100"}>
                <div className="row pt-5" style={{minHeight: "100vh"}}>
                    <div className="col-md-5">
                        <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Edit accommodation</h2>
                        <form onSubmit={onFormSubmit} style={{border: "0.2em solid black", borderRadius: "0.5em"}}
                              className="p-3 mb-5">
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
                                <label htmlFor="sleeps">Sleeps</label>
                                <input type="text"
                                       className="form-control"
                                       id="sleeps"
                                       name="sleeps"
                                       required
                                       placeholder={props.accommodation.sleeps}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="destination">Accommodation destination</label>
                                <textarea className="form-control"
                                          id="destination"
                                          name="destination"
                                          placeholder={props.accommodation.destination}
                                          onChange={handleChange}></textarea>
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
                                <label htmlFor="coordinate_x">Accommodation coordinate x</label>
                                <input type="number"
                                       className="form-control"
                                       id="coordinate_x"
                                       name="coordinate_x"
                                       placeholder={props.accommodation.coordinate_x}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coordinate_y">Accommodation coordinate y</label>
                                <input type="number"
                                       className="form-control"
                                       id="coordinate_y"
                                       name="coordinate_y"
                                       placeholder={props.accommodation.coordinate_y}
                                       onChange={handleChange}
                                />
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
                            <div className="d-flex justify-content-center">
                                <button id="submit" type="submit" className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccommodationEdit;