import React, { Component } from "react";
import Masthead from '../components/masthead/masthead.component';
import Navbar from '../components/navbar/navbar.component';
import LoginCard from '../components/login-card/login-card.component';

import './login.css';

export default class LoginView extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="content">
                    <div className="row mx-0 justify-content-center">
                        <Masthead/>
                    </div>

                    <LoginCard/>
                </div>
            </div>
        );
    }
}