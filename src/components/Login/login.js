import React from 'react';
import {useNavigate} from 'react-router-dom';
import DreamescapeService from "../../repository/dreamescapeRepository";
import marble from "../../photos/white_marble.avif";


const Login = (props) => {

    function parseJwt(token) {
        if (!token) {
            return;
        }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        DreamescapeService.login(formData.username, formData.password).then(resp => {
            sessionStorage.setItem("JWT", resp.data);
            props.onLogin()
            var array = sessionStorage.getItem("JWT");
            array = array.toString();
            array = array.split(" ");
            var jwt = array[1];
            var object = parseJwt(jwt);
            sessionStorage.setItem("role", object.role);
            sessionStorage.setItem("username", object.username);
            navigate("/home");
            navigate(0);

        })
    }

    return (
        <div style={{
            backgroundImage: `url(${marble})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "auto",
            height: "90vh",
            display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div className="container" >
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 p-5"style={{border:"0.3em solid black", borderRadius:"0.5em"}}>
                        <h4 className="text-center">Login Page</h4>
                        <form onSubmit={onFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                       className="form-control"
                                       name="username"
                                       required
                                       placeholder="Enter username"
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="price">Password</label>
                                <input type="password"
                                       className="form-control"
                                       name="password"
                                       placeholder="Enter password"
                                       required
                                       onChange={handleChange}
                                />
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12">
                                    <button id="submit" type="submit" className="btn btn-primary w-100">Submit</button>
                                </div>
                            </div>
                            <hr/>
                            <h6 className="text-center">Dont have an account? Click below to register: </h6>
                            <div className="row">
                                <div className="col-12">
                                    <a className="btn btn-success w-100" href="/register"> Go to Register </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Login;
