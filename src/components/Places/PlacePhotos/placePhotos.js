import React from "react";
import {Link} from "react-router-dom";

const PlacePhotos = (props) => {
    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
        }}>
            <div className={"container min-vh-100"}>
                <h2 className="pt-5" style={{fontFamily: "Georgia"}}>Gallery</h2>
                <Link className={"btn btn-block btn-success mt-3"} to={`/photos/add/place/${props.place.id}`}>Add new
                    photo</Link>
                <div className="row pt-3">
                    {props.photos.map((term) => {
                        return (
                            <div className="card p-0 me-1" style={{width: "18rem", border:"0.3em solid black"}}>
                                <img src={term.photoURL} className="card-img-top w-100 h-75" alt="..."/>
                                <div className="card-body d-flex justify-content-center">
                                    <button title={"Delete"} className={"btn btn-danger me-1"}
                                            onClick={() => props.onDelete(term.id, props.place.id)}>Delete
                                    </button>
                                    <Link className={"btn btn-primary"}
                                          onClick={() => props.onGet(term.id)}
                                          to={`/photos/${term.id}/edit`}>
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default PlacePhotos;