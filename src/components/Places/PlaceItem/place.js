import React from "react";
import ReactPaginate from 'react-paginate';
import AccommodationCard from "../../Accommodations/AccommodationCard/accommodationCard"

class Place extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 3
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.accommodations.length / this.state.size);
        const accommodations = this.getAccommodationsPage(offset, nextPageOffset);

        return (
            <div style={{
                height: "100vh",
                width: "100%",
                overflow: "hidden"
            }}>
                <div style={{
                    width: "100%",
                    backgroundImage: "url(https://a-static.besthdwallpaper.com/beautiful-sea-beach-wallpaper-2048x576-3614_71.jpg)",
                    height: "40vh",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    overflow: "hidden"
                }}
                     className="row">
                    <div className="col-4"></div>
                    <div className="col-8 row" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {this.props.photos.map((term) => {
                            return (
                                <div className="card me-2 p-0 rounded-0" style={{width: "10rem", height: "7rem"}}>
                                    <img src={term.photoURL} className="card-img-top" alt="..."/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="row"
                     style={{background: "linear-gradient(to right, #fcfccc 30%, #adc4e0 70%)", height: "70vh"}}>
                    <div className="col-4 p-0">
                        <p style={{color: "#255f63"}}
                           className="text-center pt-5 fs-1"><b>{this.props.place.name}</b></p>
                        <h3 style={{fontFamily: "Georgia"}}
                            className="text-center fs-6">{this.props.place.location}</h3>
                        <h5 className=" p-4 text-black "
                            style={{fontSize: "0.980em"}}>{this.props.place.description}</h5>
                    </div>
                    <div className="col-8">
                        <div className="row d-flex justify-content-center pt-3">
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
                <AccommodationCard term={term} place={this.props.place.name} onGet={this.props.onGet}
                                   onGetDates={this.props.onGetDates}/>
            );
        }).filter((accommodation, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Place;