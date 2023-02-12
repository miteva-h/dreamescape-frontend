import axios from '../custom-axios/axios';

const DreamescapeService = {
    fetchPlaces: () => {
        return axios.get("/places");
    },
    fetchPlacesNameContaining: (word) => {
        return axios.get("/places/filter", {
            "word": word
        });
    },
    fetchPlace: (id) => {
        return axios.get(`/places/${id}`);
    },
    addPlace: (name, location, description) => {
        return axios.post("/places/add", {
            "name": name,
            "location": location,
            "description": description
        });
    },
    editPlace: (id, name, location, description) => {
        return axios.put(`/places/${id}/edit`, {
            "name": name,
            "location": location,
            "description": description
        });
    },
    deletePlace: (id) => {
        return axios.delete(`/places/${id}/delete`);
    },


    fetchPhotosForPlace: (id) => {
        return axios.get(`/photos/place/${id}`);
    },
    fetchPhoto: (id) => {
        return axios.get(`/photos/${id}`);
    },
    addPhotoForPlace: (id, photoURL) => {
        return axios.post(`/photos/add/place/${id}`, {
            "photoURL": photoURL
        });
    },
    editPhoto: (id, photoURL) => {
        return axios.put(`/photos/${id}/edit`, {
            "photoURL": photoURL
        });
    },
    deletePhoto: (id) => {
        return axios.delete(`/photos/${id}/delete`);
    },


    fetchAccommodations: () => {
        return axios.get("/accommodations");
    },
    fetchAccommodationsByPlace: (id) => {
        return axios.get(`/accommodations/place/${id}`);
    },
    fetchAccommodation: (id) => {
        return axios.get(`/accommodations/${id}`);
    },
    fetchTypesOfAccommodation: () => {
        return axios.get("/accommodations/typesOfAccommodation");
    },
    fetchTypesOfBoard: () => {
        return axios.get("/accommodations/typesOfBoard");
    },
    addAccommodation: (name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo) => {
        return axios.post("/accommodations/add", {
            "name": name,
            "typeOfAccommodation": typeOfAccommodation,
            "typeOfBoard": typeOfBoard,
            "description": description,
            "place": place,
            "pricePerNight": pricePerNight,
            "photo": photo
        });
    },
    editAccommodation: (id, name, typeOfAccommodation, typeOfBoard, description, place, pricePerNight, photo) => {
        return axios.put(`/accommodations/${id}/edit`, {
            "name": name,
            "typeOfAccommodation": typeOfAccommodation,
            "typeOfBoard": typeOfBoard,
            "description": description,
            "place": place,
            "pricePerNight": pricePerNight,
            "photo": photo
        });
    },
    deleteAccommodation: (id) => {
        return axios.delete(`/accommodations/${id}/delete`);
    },


    fetchRoles: () => {
        return axios.get("/api/roles");
    },
    register: (username, password, repeatPassword, firstName, lastName, role) => {
        return axios.post("/api/register", {
            "username": username,
            "password": password,
            "repeatPassword": repeatPassword,
            "firstName": firstName,
            "lastName": lastName,
            "role": role
        });
    },
    login: (username, password) => {
        return axios.post("/api/login", {
            "username": username,
            "password": password
        });
    },


    fetchDatesForAccommodation: (id) => {
        return axios.get(`/arrangements/accommodation/${id}`);
    },
    addArrangement: (from_date, to_date, accommodation, price, username) => {
        return axios.post("/arrangements/add", {
            "from_date": from_date,
            "to_date": to_date,
            "accommodation": accommodation,
            "price": price,
            "username": username
        });
    },
    fetchArrangements: (username) => {
        return axios.get(`/arrangements/user/${username}`);
    },
    deleteArrangement: (id) => {
        return axios.delete(`/arrangements/${id}/delete`);
    },


    fetchReviewsForAccommodation: (id) => {
        return axios.get(`/reviews/accommodation/${id}`);
    },
    addReview: (reviewText, stars, username, accommodation) => {
        return axios.post("/reviews/add", {
            "reviewText": reviewText,
            "stars": stars,
            "username": username,
            "accommodation": accommodation
        });
    },
    deleteReview: (id) => {
        return axios.delete(`/reviews/${id}/delete`);
    },


    fetchFilterPlace: (word) => {
        return axios.get(`/places/filter/${word}`);
    },


    fetchArrangementsInOrder: (username) => {
        return axios.get(`/orders/user/${username}`);
    },
    fetchTotalPriceForOrder: (username) => {
        return axios.get(`/orders/totalPrice/${username}`);
    }
}

export default DreamescapeService;