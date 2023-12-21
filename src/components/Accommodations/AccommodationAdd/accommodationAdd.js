import React from "react";
import {useNavigate} from 'react-router-dom';

const AccommodationAdd = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        typeOfAccommodation: props.typesOfAccommodation[0].value,
        typeOfBoard: props.typesOfBoard[0].value,
        sleeps: 0,
        destination: "",
        description: "",
        coordinate_x: 0,
        coordinate_y: 0,
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
        const sleeps = formData.sleeps;
        const destination = formData.destination;
        const description = formData.description;
        const coordinate_x = formData.coordinate_x;
        const coordinate_y = formData.coordinate_y;
        const place = formData.place;
        const pricePerNight = formData.pricePerNight;
        const photo = formData.photo;

        props.onAddAccommodation(name, typeOfAccommodation, typeOfBoard, sleeps, destination, description, coordinate_x, coordinate_y, place, pricePerNight, photo);
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
                <div className="row pt-5 pb-5">
                    <div className="col-md-5">
                        <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Add accommodation</h2>
                        <form onSubmit={onFormSubmit} style={{border: "0.2em solid black", borderRadius: "0.5em"}}
                              className="p-3">
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
                                <label htmlFor="sleeps">Sleeps</label>
                                <input type="number"
                                       className="form-control"
                                       id="sleeps"
                                       name="sleeps"
                                       required
                                       placeholder="Sleeps"
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="destination">Accommodation destination</label>
                                <textarea className="form-control"
                                          id="destination"
                                          name="destination"
                                          placeholder="Enter accommodation destination"
                                          onChange={handleChange}></textarea>
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
                                <label htmlFor="coordinate_x">Accommodation coordinate x</label>
                                <input type="number"
                                       className="form-control"
                                       id="coordinate_x"
                                       name="coordinate_x"
                                       placeholder="Enter acommodation coordinate x"
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coordinate_y">Accommodation coordinate y</label>
                                <input type="number"
                                       className="form-control"
                                       id="coordinate_y"
                                       name="coordinate_y"
                                       placeholder="Enter accommodation coordinate y"
                                       onChange={handleChange}
                                />
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

export default AccommodationAdd;