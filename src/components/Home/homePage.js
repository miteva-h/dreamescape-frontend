import React, {useState} from "react";
import {SocialIcon} from 'react-social-icons';

const HomePage = (props) => {
    const [aboutUsHover, setAboutUsHover] = useState(false);
    const [aboutUsColor, setAboutUsColor] = useState('text-black');
    const handleHoverAboutUs = () => {
        setAboutUsHover(true);
        setAboutUsColor('text-white');
    };
    const handleUnhoverAboutUs = () => {
        setAboutUsHover(false);
        setAboutUsColor('text-black');
    };
    const [careerHover, setCareerHover] = useState(false);
    const [careerColor, setCareerColor] = useState('text-black');
    const handleHoverCareer = () => {
        setCareerHover(true);
        setCareerColor('text-white');
    };
    const handleUnhoverCareer = () => {
        setCareerHover(false);
        setCareerColor('text-black');
    };
    const [contactHover, setContactHover] = useState(false);
    const [contactColor, setContactColor] = useState('text-black');
    const handleHoverContact = () => {
        setContactHover(true);
        setContactColor('text-white');
    };
    const handleUnhoverContact = () => {
        setContactHover(false);
        setContactColor('text-black');
    };

    return (
        <div>
            <div className="w-100">
                <div id="carouselExampleCaptions" className="carousel slide w-100"
                     data-bs-ride="false" style={{border: "0.5em solid black"}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://drive.google.com/uc?export=download&id=1zUiRUFqo0WWGC9SqeKe3OaDM6vFJYd6M"
                                className="d-block" style={{height: "30em", width: "100%"}} alt="greece"/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://drive.google.com/uc?export=download&id=1eMgfOes4CL1jq8bB4JdT7THUK6uiOfZH"
                                className="d-block" style={{height: "30em", width: "100%"}} alt="italy"/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://drive.google.com/uc?export=download&id=10SSXxGohdQLq9KV2CJxW-R9xl4HfIkx_"
                                className="d-block" style={{height: "30em", width: "100%"}} alt="france"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: "auto",
                width: "100%",
            }} className="pb-5 pt-3">
                <br/>
                <div className="container d-flex justify-content-center">
                    <div className="card me-3" style={{width: "17em", border: "0.5em solid black"}}>
                        <img
                            style={{height: "12em"}}
                            src="https://drive.google.com/uc?export=download&id=18OnnAy43jT_K9HQxiyp6esYXYHbhFsTd"
                            className="card-img-top rounded-0" alt="alone time"/>
                        <div className="card-body">
                            <h5>Alone time</h5>
                            <p className="card-text">Whenever you feel like you must get away from your everyday habits,
                                we are your perfect solution. Choose your desired villa,
                                and book your holiday so you can fill up your batteries again.</p>
                        </div>
                    </div>
                    <div className="card me-3" style={{width: "17em", border: "0.5em solid black"}}>
                        <img
                            style={{height: "12em"}}
                            src="https://drive.google.com/uc?export=download&id=1YikXpiSvj97LJg_tImv36LPal7txMWm6"
                            className="card-img-top rounded-0" alt="speacial dishes"/>
                        <div className="card-body">
                            <h5>Special dishes</h5>
                            <p className="card-text">
                                You do not even have to worry about cooking, we got you about that too. Our big team of
                                experiences chefs and our service will provide excellent hospitality. </p>
                        </div>
                    </div>
                    <div className="card" style={{width: "17em", border: "0.5em solid black"}}>
                        <img
                            style={{height: "12em"}}
                            src="https://drive.google.com/uc?export=download&id=1QynOiIC9R2Aaq0phqeQV3riRuBFMK4kc"
                            className="card-img-top rounded-0" alt="amazing scenery"/>
                        <div className="card-body">
                            <h5>Amazing scenery</h5>
                            <p className="card-text">Whether you envisions an escape to the majestic mountains,
                                a getaway by the beach, or an exploration through the streets of
                                your beloved city, each option promises breathtaking scenery.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(https://drive.google.com/uc?export=download&id=1zLLzzcFdwLz8puVl_gQBbpJkV9SgY41c)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "25em",
                width: "auto"
            }}>
                <div className="float-end  w-auto h-auto">
                    <div className="rounded-3 text-white text-center d-inline-block w-50 "
                         style={{background: "black", border: "1em solid black", marginTop: "7em", marginLeft: "7em"}}>
                        <h3>Follow us and explore the world with Dream Escape:</h3>
                        <div>
                            <SocialIcon url="https://www.facebook.com/hristina.miteva.967?mibextid=LQQJ4d"
                                        target="_blank" fgColor="white" bgColor="black"/>
                            <SocialIcon url="https://instagram.com/miteva.h?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"
                                        target="_blank" fgColor="white" bgColor="black"/>
                            <SocialIcon url="https://www.linkedin.com/in/hristina-miteva-507b8b261" target="_blank"
                                        fgColor="white" bgColor="black"/>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(https://drive.google.com/uc?export=download&id=12_-K20wkci_BtjUNpSv_KGPL4VUcNinh)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: "auto",
                width: "100%"
            }}>
                <div className="container">
                    <div className="row w-100">
                        <div className="col-2"></div>
                        <div className="col-8  m-3 p-0 rounded-3 w-100 d-flex align-items-center align-content-center"
                             style={{border: "0.5em solid black", height: "5em"}}>
                            <div
                                className="float-end text-center h-100 w-100 d-flex align-items-center justify-content-center"
                                style={{
                                    width: "33%",
                                    borderRight: "0.5em solid black",
                                    backgroundColor: aboutUsHover ? 'black' : 'inherit',
                                    transition: 'all 0.1s ease'
                                }} onMouseEnter={handleHoverAboutUs}
                                onMouseLeave={handleUnhoverAboutUs}>
                                <h5><a href="/aboutUs" className={aboutUsColor}>ABOUT US</a></h5>
                            </div>
                            <div
                                className="float-end text-center h-100 w-100 d-flex align-items-center justify-content-center"
                                style={{
                                    width: "33%",
                                    borderRight: "0.5em solid black",
                                    backgroundColor: careerHover ? 'black' : 'inherit',
                                    transition: 'all 0.1s ease'
                                }} onMouseEnter={handleHoverCareer}
                                onMouseLeave={handleUnhoverCareer}>
                                <h5><a href="/career" className={careerColor}>CAREER</a></h5>
                            </div>
                            <div
                                className=" float-end text-center h-100 w-100 d-flex align-items-center justify-content-center"
                                style={{
                                    width: "34%",
                                    backgroundColor: contactHover ? 'black' : 'inherit',
                                    transition: 'all 0.1s ease'
                                }} onMouseEnter={handleHoverContact}
                                onMouseLeave={handleUnhoverContact}>
                                <h5><a href="/contact" className={contactColor}>CONTACT</a></h5>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;