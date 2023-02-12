import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {BsFillBagCheckFill, BsFillCartFill} from "react-icons/bs";

const Header = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        word: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const word = formData.word;

        props.onFilterPlace(word);
        navigate(`/places/filter/${word}`);
    }

    let username = sessionStorage.getItem("username");
    let role = sessionStorage.getItem("role");

    let authenticate;
    if (sessionStorage.getItem("JWT")) {
        authenticate = (<a className="nav-link active" aria-current="page" href="/login"
                           onClick={() => {
                               sessionStorage.clear();
                               localStorage.clear();
                           }}>Logout</a>
        );
    } else {
        authenticate = (<a className="nav-link active" aria-current="page" href="/login">Login</a>);
    }

    let carts;
    if (role != null && role === "USER") {
        carts = (
            <div>
                <Link to={"/shoppingcart"} onClick={() => props.onLoadArrangements(username)}
                      className="pe-3 pb-1"><BsFillCartFill/></Link>
                <Link to={"/orders"}
                      onClick={() => {
                          props.onGetArrangementsForOrder(username);
                          props.onGetTotalPriceForOrder(username);
                      }} className="pe-3 pb-1"><BsFillBagCheckFill/></Link>
            </div>
        )
        ;
    }

    let menu;
    if (role != null && role === "ADMIN") {
        menu = (
            <ul className="dropdown-menu">
                {props.places.map((term) => {
                        return (
                            <li>
                                <Link className={"dropdown-item"}
                                      onClick={() => {
                                          props.onGet(term.id);
                                          props.onGetPhotos(term.id);
                                          props.onGetAccommodations(term.id);
                                      }}
                                      to={`/places/${term.id}`}>
                                    {term.name}
                                </Link>
                            </li>
                        );
                    }
                )}
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="/places">Destinations</a></li>
                <li><a className="dropdown-item" href="/accommodations">Accommodations</a></li>
            </ul>
        );
    } else {
        menu = (
            <ul className="dropdown-menu">
                {props.places.map((term) => {
                        return (
                            <li>
                                <Link className={"dropdown-item"}
                                      onClick={() => {
                                          props.onGet(term.id);
                                          props.onGetPhotos(term.id);
                                          props.onGetAccommodations(term.id);
                                      }}
                                      to={`/places/${term.id}`}>
                                    {term.name}
                                </Link>
                            </li>
                        );
                    }
                )}
            </ul>
        );
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <div>
                        <img alt="logo"
                             src="https://thumbs.dreamstime.com/b/simple-clean-crisp-creative-de-logo-icon-design-vector-format-creative-de-logo-icon-design-169949125.jpg"
                             style={{
                                 height: '70px',
                                 width: '70px'
                             }}/>
                    </div>
                    <a className="navbar-brand ms-2" href="/home">
                        Dream Escape</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Destinations
                                </a>
                                {menu}
                            </li>
                        </ul>
                        <div className="d-flex me-auto">
                            {carts}
                            {authenticate}
                        </div>
                        <form className="d-flex" onSubmit={onFormSubmit}>
                            <div className="form-group pe-2">
                                <input type="text"
                                       className="form-control"
                                       id="word"
                                       name="word"
                                       required
                                       placeholder="Enter text"
                                       onChange={handleChange}
                                />
                            </div>
                            <button id="submit" type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
