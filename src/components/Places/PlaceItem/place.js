import React from "react";
import ReactPaginate from 'react-paginate';
import AccommodationCard from "../../Accommodations/AccommodationCard/accommodationCard"
import marble from "../../../photos/white_marble.avif";
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

class Place extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 3,
            coordinate_x: null,
            coordinate_y: null,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            nextProps.place.coordinate_x !== prevState.coordinate_x ||
            nextProps.place.coordinate_y !== prevState.coordinate_y
        ) {
            return {
                coordinate_x: nextProps.place.coordinate_x,
                coordinate_y: nextProps.place.coordinate_y,
            };
        }
        return null;
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.accommodations.length / this.state.size);
        const accommodations = this.getAccommodationsPage(offset, nextPageOffset);
        const { coordinate_x, coordinate_y } = this.state;

        return (
            <div style={{
                height: "auto",
                width: "100%",
                overflow: "hidden"
            }}>
                <div className="w-100 h-100">
                    <div style={{position: "relative", width: "100%", height: "30em", border: "0.5em solid black",}}>
                        {coordinate_x!=null && coordinate_y!=null &&<MapContainer
                            center={[coordinate_x, coordinate_y]}
                            zoom={6}
                            style={{position: "absolute", top: 0, left: 0, height: '100%', width: '100%', zIndex: 0}}
                        >
                            <TileLayer
                                attribution="OpenStreetMap"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>}
                        <div className="w-100" style={{position: "relative", zIndex: 1}}>
                            {this.props.photos.map((term, index) => (
                                <div key={index} className="card me-2 p-0 rounded-0" style={{
                                    width: "10rem",
                                    height: "7rem",
                                    position: "absolute",
                                    top: "18rem",
                                    right: `${index * 12}rem`
                                }}>
                                    <img src={term.photoURL} className="card-img-top h-100 w-100" alt="place_photo"
                                         style={{border: "0.2em solid black"}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row"
                     style={{
                         backgroundImage: `url(${marble})`,
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                         width: "auto",
                     }}>
                    <div className="col-4 p-0 ps-5">
                        <p style={{fontFamily: "Georgia"}} className="text-center pt-5 fs-1 fw-bolder">
                            <b>{this.props.place.name}</b></p>
                        <h5 className=" p-4 text-black " style={{fontSize: "1.2em"}}>{this.props.place.description}</h5>
                    </div>
                    <div className="col-8">
                        <div className="row d-flex justify-content-center pt-5">
                            {accommodations}

                            <ReactPaginate previousLabel={"<<"}
                                           nextLabel={">>"}
                                           breakLabel={<a href="/#">...</a>}
                                           breakClassName={"break-me"}
                                           pageCount={pageCount}
                                           marginPagesDisplayed={2}
                                           pageRangeDisplayed={5}
                                           onPageChange={this.handlePageClick}
                                           containerClassName={"pagination p-4 justify-content-center"}
                                           activeClassName={"active"}

                                           previousClassName={"page-item"}
                                           previousLinkClassName={"page-link"}
                                           nextClassName={"page-item"}
                                           nextLinkClassName={"page-link"}
                                           pageClassName={"ml-1 page-item"}
                                           pageLinkClassName={"page-link"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }
    getAccommodationsPage = (offset, nextPageOffset) => {
        return this.props.accommodations.map((term) => {
            return (
                <AccommodationCard term={term} onGet={this.props.onGet}
                                   onGetDates={this.props.onGetDates}/>
            );
        }).filter((accommodation, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Place;