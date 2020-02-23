import React, { Component } from "react";
import Panel from '../components/panel/panel.component';
import SignupForm from '../components/signup-form/signup-form.component';

import './signup.css';



export default class SignUpView extends Component {

    render() {
        return (
            <div className="container-fluid h-100 signup-page__width">
                <div className="row h-panel">
                    <div className="col-md-6 panel-background px-0">
                        <div className="panel-background-image">
                            <Panel/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <SignupForm/>
                    </div>
                </div>
            </div>
        )
    }
}