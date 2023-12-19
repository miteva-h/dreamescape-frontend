import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {BsFillBagCheckFill, BsFillCartFill, BsFillFilePersonFill} from "react-icons/bs";

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
        updateFormData({
            word: ''
        });
        navigate(`/places/filter/${word}`);
    }

    let role = sessionStorage.getItem("role");
    let username = sessionStorage.getItem("username");

    let authenticate;
    if (sessionStorage.getItem("JWT")) {
        authenticate = (<span style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.5em'
            }}><BsFillFilePersonFill></BsFillFilePersonFill> {username} <a
                style={{borderRight: "0.1em solid grey", borderLeft: "0.1em solid grey"}}
                className="nav-link active fs-4 ps-3 pe-3 ms-2 me-2 text-decoration-underline" aria-current="page"
                href="/login"
                onClick={() => {
                    sessionStorage.clear();
                    localStorage.clear();
                }}> Logout</a></span>
        );
    } else {
        authenticate = (<a className="nav-link active fs-4 border-end border-start p-3" aria-current="page"
                           href="/login">Login</a>);
    }

    let carts;
    if (role != null && role === "USER") {
        carts = (
            <div>
                <Link to={"/shoppingcart"} onClick={() => props.onLoadArrangements()}
                      className="pe-3 pb-1"><BsFillCartFill color='black' fontSize='1.5em'/></Link>
                <Link to={"/orders"}
                      onClick={() => {
                          props.onGetArrangementsForOrder();
                          props.onGetTotalPriceForOrder();
                      }} className="pe-3 pb-1"><BsFillBagCheckFill color='black' fontSize='1.5em'/></Link>
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
                            <li key={term.id}>
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
                <li><a className="dropdown-item" href="/arrangements/booked">Booked arrangements</a></li>
                <li><a className="dropdown-item" href="/arrangements/paid">Paid arrangements</a></li>
            </ul>
        );
    } else {
        menu = (
            <ul className="dropdown-menu">
                {props.places.map((term) => {
                        return (
                            <li key={term.id}>
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
                        <a className="navbar-brand ms-2 " href="/home">
                            <img alt="logo"
                                 src="https://drive.google.com/uc?export=download&id=1Fo4gPLuVQv5Z44XELax-7SbYZ4pcXQ91"
                                 style={{
                                     height: '4em',
                                     width: 'auto'
                                 }}
                            /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown fs-4 ps-3">
                                <button className="nav-link dropdown-toggle"
                                        style={{border: "none", background: "white"}} data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                    Destinations
                                </button>
                                {menu}
                            </li>
                        </ul>
                        <div className="d-flex me-auto">
                            {authenticate}
                            {carts}
                        </div>
                        <form className="d-flex" onSubmit={onFormSubmit}>
                            <div className="form-group pe-2">
                                <input type="text"
                                       className="form-control"
                                       id="word"
                                       name="word"
                                       required
                                       value={formData.word}
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
