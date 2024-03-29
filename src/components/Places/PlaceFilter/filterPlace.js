import React from "react";
import {Link} from "react-router-dom";
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const filterPlaces = (props) => {
    return (
        <div style={{
            backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: "120vh",
            width: "100%",
        }}>
            <div className="container pt-5">
                {props.places.length > 0 ? <div className={"row pb-5"} >
                        {props.places.map((term) => {
                                return (
                                    <div className="col-4" style={{height:"10em"}}>
                                        <div className="card me-2 p-0 rounded-4 bg-light"
                                             style={{width: "100%", height: "auto"}}>
                                            <div className="card-header bg-black text-white text-center"
                                                 style={{fontFamily: "Georgia", fontStyle: "italic"}}>
                                                <h2>Join us on an amazing adventure in </h2>
                                                <h1>{term.name}</h1>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="card-subtitle mt-3 mb-5 text-muted" style={{height:"18em"}}>
                                                    {term.description}</h6>
                                                <div className="d-flex align-items-center">
                                                    <MapContainer
                                                        center={[term.coordinate_x, term.coordinate_y]}
                                                        zoom={6}
                                                        style={{height: '30em', width: '100%'}}
                                                    >
                                                        <TileLayer
                                                            attribution="OpenStreetMap"
                                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        />
                                                    </MapContainer>
                                                </div>
                                                <Link className={"btn d-block text-white"} style={{background: "black"}}
                                                      onClick={() => {
                                                          props.onGet(term.id);
                                                          props.onGetPhotos(term.id);
                                                          props.onGetAccommodations(term.id);
                                                      }}
                                                      to={`/places/${term.id}`}>
                                                    See
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div> :
                    <div className="fw-bolder pt-5" style={{minHeight: "90vh"}}><h2><i>There are no destinations
                        available.</i></h2></div>
                }
            </div>
        </div>
    );
}

export default filterPlaces;