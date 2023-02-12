import React from "react";
import {SocialIcon} from 'react-social-icons';

const homePage = (props) => {
    return (
        <div>
            <div className="w-100">
                <div id="carouselExampleCaptions" className="carousel slide"
                     data-bs-ride="false">
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
                                src="https://www.myworld.com/media/lt/home-banner/partnerwerbung/Homebanner-Website-1920x540px-.png"
                                className="d-block" style={{height: "430px"}} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://wmk-ci.xsoftstatic.com/Write/07265/Images/Sliki_Web_Slider/Esenski-Citybreak/Web-slider-City-break_2.jpg"
                                className="d-block" style={{height: "430px"}} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://wmk-ci.xsoftstatic.com/Write/07265/Images//Sliki_Web_Slider/Savana_2022-Hoteli-Grcija-WebSlider-(1).jpg"
                                className="d-block" style={{height: "430px"}} alt="..."/>
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
                backgroundImage: "url(" + "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-travel-together-white-minimalist-banner-image_195262.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: '1515px 430px',
                backgroundRepeat: 'no-repeat',
                height: "430px",
                width: "auto",
            }}>
                <br/>
                <div className="container d-flex justify-content-center">
                    <div className="card me-3 border-0" style={{width: "17rem"}}>
                        <img
                            src="data:image/jpeg;base64,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"
                            className="card-img-top rounded-0" alt="..."/>
                        <div className="card-body">
                            <h5>Alone time</h5>
                            <p className="card-text">Whenever you feel like you must get away from your everyday habits,
                                we are your perfect solution. Choose your desired villa,
                                and book your holiday so you can fill up your batteries again.</p>
                        </div>
                    </div>
                    <div className="card me-3 border-0" style={{width: "17rem"}}>
                        <img
                            src="https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
                            className="card-img-top rounded-0" alt="..."/>
                        <div className="card-body">
                            <h5>Special dishes</h5>
                            <p className="card-text">
                                You do not even have to worry about cooking, we got you about that too. Our big team of
                                experiences chefs and our service will provide excellent hospitality. </p>
                        </div>
                    </div>
                    <div className="card border-0" style={{width: "17rem"}}>
                        <img
                            src="https://www.roadaffair.com/wp-content/uploads/2017/10/freedom-world-shutterstock_413831764.jpg"
                            className="card-img-top rounded-0" alt="..."/>
                        <div className="card-body">
                            <h5>How travel starts</h5>
                            <p className="card-text">Whether a traveler is considering a well-deserved foray into the
                                mountains, a relaxing retreat to the beach, or a thrilling trip into the heart of their
                                favorite city, it all starts with a dream.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: "url(" + "https://wallpapercrafter.com/desktop/18504-travel-map-compass-camera-4k.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "430px",
                width: "auto",
                opacity: "0.7"
            }}>
                <div className="float-end  w-50 h-100 ">
                    <div className="rounded-3 text-white text-center d-inline-block align-middle w-50"
                         style={{background: "#4593b0", border: "10px solid #4593b0", marginTop: "125px"}}>
                        <h3>Follow us and explore the world with Dream Escape:</h3>
                        <p>
                            <SocialIcon url="https://facebook.com/in/#" fgColor="white" bgColor="#4593b0"/>
                            <SocialIcon url="https://twitter.com/in/#" fgColor="white" bgColor="#4593b0"/>
                            <SocialIcon url="https://instagram.com/in/#" fgColor="white" bgColor="#4593b0"/>
                            <SocialIcon url="https://youtube.com/in/#" fgColor="white" bgColor="#4593b0"/>
                            <SocialIcon url="https://linkedin.com/in/#" fgColor="white" bgColor="#4593b0"/>
                        </p>
                    </div>
                </div>
            </div>

            <div style={{
                height: "200px",
                width: "auto",
                background: "#4593b0",
                opacity: "0.7"
            }}>
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-2"></div>
                        <div className="col-8 mt-3 mb-2 rounded-3 h-75 pt-3" style={{border: "2px solid #c4a329"}}>
                            <div className="float-end w-50 ps-5">
                                <h5><a href="#" className="text-white text-decoration-none">Travel insurance</a></h5>
                                <h5><a href="#" className="text-white text-decoration-none">Information
                                    confidentiality</a></h5>
                                <h5><a href="#" className="text-white text-decoration-none">Cookies policy</a></h5>
                            </div>
                            <div className="float-end w-25">
                                <h5><a href="#" className="text-white text-decoration-none">Conditions</a></h5>
                                <h5><a href="#" className="text-white text-decoration-none">Politics</a></h5>
                                <h5><a href="#" className="text-white text-decoration-none">Dream Escape club</a></h5>
                            </div>
                            <div className="float-end w-25 ps-5">
                                <h5><a href="#" className="text-white text-decoration-none">About us</a></h5>
                                <h5><a href="#" className="text-white text-decoration-none">Contact</a></h5>
                                <h5><a href="#" className="text-white text-decoration-none">Career</a></h5>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default homePage;