import React from 'react';
import DreamescapeService from "../../repository/dreamescapeRepository";
import {useNavigate} from "react-router-dom";


const Register = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: "",
        repeatPassword: "",
        firstName: "/",
        lastName: "/",
        role: "ADMIN"
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const username = formData.username;
        const password = formData.password;
        const repeatPassword = formData.repeatPassword;
        const firstName = formData.firstName;
        const lastName = formData.lastName;
        const role = formData.role;
        DreamescapeService.register(username, password, repeatPassword, firstName, lastName, role);
        navigate("/login");
    }

    return (
        <div className="row mt-5 justify-content-center" style={{height: "100vh"}}>
            <div className="col-md-5">
                <h4 className="text-center">Register Page</h4>
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
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               placeholder="Enter password"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="repeatPassword">Repeat password</label>
                        <input type="password"
                               className="form-control"
                               name="repeatPassword"
                               placeholder="Enter password again"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text"
                               className="form-control"
                               name="firstName"
                               required
                               placeholder="Enter firstName"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text"
                               className="form-control"
                               name="lastName"
                               required
                               placeholder="Enter lastName"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="role">Role</label>
                        <select name="role" className="form-control" onChange={handleChange}>
                            {props.roles.map((term) =>
                                <option value={term.name}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <button id="submit" type="submit" className="btn btn-primary w-100">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;