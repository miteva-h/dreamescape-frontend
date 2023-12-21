import React from "react";
import {useNavigate} from 'react-router-dom';

const PlaceEdit = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: "",
        coordinate_x: 0,
        coordinate_y: 0
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
        const description = formData.description !== "" ? formData.description : props.place.description;
        const coordinate_x = formData.coordinate_x !== 0 ? formData.coordinate_x : props.place.coordinate_x;
        const coordinate_y = formData.coordinate_y !== 0 ? formData.coordinate_y : props.place.coordinate_y;

        props.onEditPlace(props.place.id, name, description, coordinate_x, coordinate_y);
        navigate("/places");
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
                <div className="row pt-5" style={{height: "100vh"}}>
                    <div className="col-md-5">
                        <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Edit destination</h2>
                        <form onSubmit={onFormSubmit} style={{border: "0.2em solid black", borderRadius: "0.5em"}}
                              className="p-3">
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
                                <label htmlFor="description">Destination description</label>
                                <textarea className="form-control"
                                          id="description"
                                          name="description"
                                          placeholder={props.place.description}
                                          onChange={handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="coordinate_x">Destination coordinate x</label>
                                <input type="number"
                                       className="form-control"
                                       id="coordinate_x"
                                       name="coordinate_x"
                                       placeholder={props.place.coordinate_x}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coordinate_y">Destination coordinate y</label>
                                <input type="number"
                                       className="form-control"
                                       id="coordinate_y"
                                       name="coordinate_y"
                                       placeholder={props.place.coordinate_y}
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

export default PlaceEdit;