import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../Home/homePage"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Places from "../Places/PlacesList/places"
import PlaceAdd from "../Places/PlaceAdd/placeAdd"
import PlaceEdit from "../Places/PlaceEdit/placeEdit"
import PlaceAccommodations from "../Places/PlaceAccommodations/placeAccommodations"
import PlacePhotos from "../Places/PlacePhotos/placePhotos"
import PhotoAdd from "../Places/PlacePhotos/placePhotoAdd"
import PhotoEdit from "../Places/PlacePhotos/placePhotoEdit"
import Accommodations from "../Accommodations/AccommodationsList/accommodations"
import AccommodationAdd from "../Accommodations/AccommodationAdd/accommodationAdd"
import AccommodationEdit from "../Accommodations/AccommodationEdit/accommodationEdit"
import Place from "../Places/PlaceItem/place"
import Accommodation from "../Accommodations/AccommodationItem/accommodation"
import ShoppingCart from "../ShoppingCart/ShoppingCartList/shoppingcart"
import PaymentForm from "../ShoppingCart/Payment/payment"
import Order from "../Orders/orders"
import Review from "../Reviews/ReviewList/reviews"
import Filter from "../Places/PlaceFilter/filterPlace"
import Register from "../Register/register"
import Login from "../Login/login"

import DreamescapeService from "../../repository/dreamescapeRepository"


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            places: [],
            filterPlaces: [],
            selectedPlace: {},
            photosForPlace: [],
            selectedPhoto: {},
            accommodations: [],
            accommodationsByPlace: [],
            selectedAccommodation: {},
            typesOfAccommodation: [],
            typesOfBoard: [],
            roles: [],
            datesNotAvailable: [],
            arrangementsInShoppingCart: [],
            reviewsForAccommodation: [],
            amountForOrder: {},
            arrangementForOrder: {},
            totalPriceForOrder: {},
            arrangementsInOrder: []
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header places={this.state.places}
                        onGet={this.loadPlace}
                        onGetPhotos={this.loadPhotosForPlace}
                        onGetAccommodations={this.loadAccommodationsByPlace}
                        onGetPlacesNameContaining={this.loadPlacesNameContaining}
                        onLoadArrangements={this.loadArrangements}
                        onFilterPlace={this.loadFilterPlace}
                        onGetArrangementsForOrder={this.loadArrangementsForOrders}
                        onGetTotalPriceForOrder={this.loadTotalPriceForOrder}/>
                <main>
                    <Routes>
                        {["/", "/home"].map((path) => {
                            return (<Route path={path}
                                           element={<HomePage/>}/>)
                        })}
                        <Route path="/places"
                               element={<Places places={this.state.places}
                                                onDelete={this.deletePlace}
                                                onGet={this.loadPlace}
                                                onGetPhotos={this.loadPhotosForPlace}
                                                onGetAccommodations={this.loadAccommodationsByPlace}/>}/>
                        <Route path="/places/add"
                               element={<PlaceAdd onAddPlace={this.addPlace}/>}/>
                        <Route path="/places/:id/edit"
                               element={<PlaceEdit onEditPlace={this.editPlace}
                                                   place={this.state.selectedPlace}/>}/>}
                        <Route path="/accommodations/place/:id"
                               element={<PlaceAccommodations accommodations={this.state.accommodationsByPlace}/>}/>

                        <Route path="/photos/place/:id"
                               element={<PlacePhotos photos={this.state.photosForPlace}
                                                     place={this.state.selectedPlace}
                                                     onGet={this.loadPhoto}
                                                     onDelete={this.deletePhoto}/>}/>
                        <Route path="/photos/add/place/:id"
                               element={<PhotoAdd place={this.state.selectedPlace}
                                                  onAddPhoto={this.addPhotoForPlace}/>}/>
                        <Route path="/photos/:id/edit"
                               element={<PhotoEdit onEditPhoto={this.editPhoto}
                                                   photo={this.state.selectedPhoto}
                                                   place={this.state.selectedPlace}/>}/>


                        <Route path="/accommodations"
                               element={<Accommodations accommodations={this.state.accommodations}
                                                        onDelete={this.deleteAccommodation}
                                                        onGet={this.loadAccommodation}/>}/>

                        <Route path="/accommodations/add"
                               element={<AccommodationAdd places={this.state.places}
                                                          typesOfAccommodation={this.state.typesOfAccommodation}
                                                          typesOfBoard={this.state.typesOfBoard}
                                                          onAddAccommodation={this.addAccommodation}/>}/>
                        <Route path="/accommodations/:id/edit"
                               element={<AccommodationEdit places={this.state.places}
                                                           typesOfAccommodation={this.state.typesOfAccommodation}
                                                           typesOfBoard={this.state.typesOfBoard}
                                                           onEditAccommodation={this.editAccommodation}
                                                           accommodation={this.state.selectedAccommodation}/>}/>


                        <Route path="/places/:id"
                               element={<Place place={this.state.selectedPlace}
                                               photos={this.state.photosForPlace}
                                               accommodations={this.state.accommodationsByPlace}
                                               onGet={this.loadAccommodation}
                                               onGetDates={this.loadDatesForAccommodation}/>}/>

                        <Route path="/accommodation/:id"
                               element={<Accommodation accommodation={this.state.selectedAccommodation}
                                                       datesNotAvailable={this.state.datesNotAvailable}
                                                       onAddArrangement={this.addArrangement}
                                                       onGetReviews={this.loadReviewsForAccommodation}
                                                       onGetAccommodation={this.loadAccommodation}/>}/>

                        <Route path="/shoppingcart"
                               element={<ShoppingCart arrangements={this.state.arrangementsInShoppingCart}
                                                      onDelete={this.deleteArrangement}
                                                      onGetInfo={this.loadInfoForOrder}/>}/>

                        <Route path="/payment"
                               element={<PaymentForm amount={this.state.amountForOrder}
                                                     arrangement={this.state.arrangementForOrder}/>}/>

                        <Route path="/orders"
                               element={<Order totalPrice={this.state.totalPriceForOrder}
                                               arrangementsInOrder={this.state.arrangementsInOrder}/>}/>

                        <Route path="/reviews/:id"
                               element={<Review reviews={this.state.reviewsForAccommodation}
                                                accommodation={this.state.selectedAccommodation}
                                                onAddReview={this.addReview}
                                                onDeleteReview={this.deleteReview}/>}/>

                        <Route path="/places/filter/:location"
                               element={<Filter places={this.state.filterPlaces}
                                                onGet={this.loadPlace}
                                                onGetPhotos={this.loadPhotosForPlace}
                                                onGetAccommodations={this.loadAccommodationsByPlace}/>}/>

                        <Route path="/register"
                               element={<Register roles={this.state.roles}/>}/>
                        <Route path="/login"
                               element={<Login onLogin={this.fetchData}/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        )
    }

    loadPlaces = () => {
        DreamescapeService.fetchPlaces()
            .then((data) => {
                this.setState({places: data.data})
            });
    }

    loadPlacesNameContaining = (word) => {
        DreamescapeService.fetchPlacesNameContaining(word)
            .then((data) => {
                this.setState({placesNameContaining: data.data})
            });
    }

    loadPlace = (id) => {
        DreamescapeService.fetchPlace(id)
            .then((data) => {
                this.setState({selectedPlace: data.data})
            });
    }

    addPlace = (name, location, description) => {
        DreamescapeService.addPlace(name, location, description)
            .then(() => {
                this.loadPlaces();
            });
    }

    editPlace = (id, name, location, description) => {
        DreamescapeService.editPlace(id, name, location, description)
            .then(() => {
                this.loadPlaces();
            });
    }

    deletePlace = (id) => {
        DreamescapeService.deletePlace(id)
            .then(() => {
                this.loadPlaces();
            });
    }


    loadPhotosForPlace = (id) => {
        DreamescapeService.fetchPhotosForPlace(id)
            .then((data) => {
                this.setState({photosForPlace: data.data})
            });
    }

    loadPhoto = (id) => {
        DreamescapeService.fetchPhoto(id)
            .then((data) => {
                this.setState({selectedPhoto: data.data})
            });
    }

    addPhotoForPlace = (id, photoURL) => {
        DreamescapeService.addPhotoForPlace(id, photoURL)
            .then(() => {
                this.loadPhotosForPlace(id);
            });
    }

    editPhoto = (id, photoURL, placeId) => {
        DreamescapeService.editPhoto(id, photoURL)
            .then(() => {
                this.loadPhotosForPlace(placeId);
            });
    }

    deletePhoto = (id, placeId) => {
        DreamescapeService.deletePhoto(id)
            .then(() => {
                this.loadPhotosForPlace(placeId);
            });
    }


    loadAccommodations = () => {
        DreamescapeService.fetchAccommodations()
            .then((data) => {
                this.setState({accommodations: data.data})
            });
    }

    loadAccommodationsByPlace = (id) => {
        DreamescapeService.fetchAccommodationsByPlace(id)
            .then((data) => {
                this.setState({accommodationsByPlace: data.data})
            });
    }

    loadAccommodation = (id) => {
        DreamescapeService.fetchAccommodation(id)
            .then((data) => {
                this.setState({selectedAccommodation: data.data})
            });
    }

    loadTypesOfAccommodation = () => {
        DreamescapeService.fetchTypesOfAccommodation()
            .then((data) => {
                this.setState({typesOfAccommodation: data.data})
            });
    }

    loadTypesOfBoard = () => {
        DreamescapeService.fetchTypesOfBoard()
            .then((data) => {
                this.setState({typesOfBoard: data.data})
            });
    }

    addAccommodation = (name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo) => {
        DreamescapeService.addAccommodation(name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo)
            .then(() => {
                this.loadAccommodations();
            });
    }

    editAccommodation = (id, name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo) => {
        DreamescapeService.editAccommodation(id, name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo)
            .then(() => {
                this.loadAccommodations();
            });
    }

    deleteAccommodation = (id) => {
        DreamescapeService.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            });
    }


    loadRoles = () => {
        DreamescapeService.fetchRoles()
            .then((data) => {
                this.setState({roles: data.data})
            });
    }


    loadDatesForAccommodation = (id) => {
        DreamescapeService.fetchDatesForAccommodation(id)
            .then((data) => {
                this.setState({datesNotAvailable: data.data})
            });
    }

    addArrangement = (from_date, to_date, accommodation, price, username) => {
        DreamescapeService.addArrangement(from_date, to_date, accommodation, price, username)
            .then(() => {
                this.loadArrangements(username);
            });
    }

    loadArrangements = (username) => {
        DreamescapeService.fetchArrangements(username)
            .then((data) => {
                this.setState({arrangementsInShoppingCart: data.data})
            });
    }

    deleteArrangement = (id, username) => {
        DreamescapeService.deleteArrangement(id)
            .then(() => {
                this.loadArrangements(username);
            });
    }


    loadReviewsForAccommodation = (id) => {
        DreamescapeService.fetchReviewsForAccommodation(id)
            .then((data) => {
                this.setState({reviewsForAccommodation: data.data})
            });
    }

    addReview = (reviewText, stars, username, accommodation) => {
        DreamescapeService.addReview(reviewText, stars, username, accommodation)
            .then(() => {
                this.loadReviewsForAccommodation(accommodation);
            });
    }

    deleteReview = (id, accommodation) => {
        DreamescapeService.deleteReview(id)
            .then(() => {
                this.loadReviewsForAccommodation(accommodation);
            });
    }


    loadFilterPlace = (word) => {
        DreamescapeService.fetchFilterPlace(word)
            .then((data) => {
                this.setState({filterPlaces: data.data})
            });
    }


    loadInfoForOrder = (amount, arrangement) => {
        this.setState({amountForOrder: amount, arrangementForOrder: arrangement});
    }

    loadArrangementsForOrders = (username) => {
        DreamescapeService.fetchArrangementsInOrder(username)
            .then((data) => {
                this.setState({arrangementsInOrder: data.data})
            });
    }

    loadTotalPriceForOrder = (username) => {
        DreamescapeService.fetchTotalPriceForOrder(username)
            .then((data) => {
                this.setState({totalPriceForOrder: data.data})
            });
    }

    componentDidMount() {
        this.loadPlaces();
        this.loadTypesOfAccommodation();
        this.loadTypesOfBoard();
        this.loadAccommodations();
        this.loadRoles();
    }

    fetchData = () => {
    }
}

export default App;
