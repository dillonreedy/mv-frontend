import React from "react";
import FormInput from '../shared/form-input/form-input.component';
import Button from '../shared/button/button.component';
import FailedAttempt from '../shared/failed-attempt/failed-attempt.component';

import loginService from '../../services/loginService';

import './login-card.css';

const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    failedLoginMsg: '',
}

class LoginCard extends React.Component {
    state = initialState;

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validate = () => {
        let isValid = true;

        if (!(this.state.email))
        {
            this.setState({emailError: 'This field is required'});
            isValid = false;
        }

        if (!(this.state.password))
        {
            this.setState({passwordError: 'This field is required'});
            isValid = false;
        }

        return isValid;
    }

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid)
        {
            loginService.login({
                email: this.state.email,
                password: this.state.password,
            }).then((loggedIn) => {
                if (loggedIn)
                {
                    window.confirm(`The user has successfully logged in.`);
                    this.setState(initialState);
                }
                else
                {
                    this.setState({failedLoginMsg: 'There was a problem with your credentials. Please try again. Accounts are locked after 5 failed login attempts.'});
                }
            });
        }
    }
    
    render() {

        return (
            <div className="card card-background-color card-placement card-size card-shadow card-decoration" >
                <form noValidate="noValidate" onSubmit={this.handleSubmit}>
                    <div className="container py-4 px-4">
                        <div className="row justify-content-center">
                            <div className="card-title">Sign In With</div>
                        </div>
                        <div className="row justify-content-center">                                
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <FormInput  label="Email Address" 
                                            name="email"
                                            type="email" 
                                            placeholder="email@address.com"
                                            value={this.state.email}
                                            handleChange={e => this.change(e)}
                                            errorText={this.state.emailError}
                                            />
                            </div>
    
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <FormInput  label="Password" 
                                            type="password"
                                            name="password" 
                                            placeholder="Password"
                                            value={this.state.password}
                                            handleChange={(e) => this.change(e)}
                                            errorText={this.state.passwordError}
                                            />
                            </div>
                        </div>
                        <FailedAttempt errorText={this.state.failedLoginMsg}/>
                        <div className="row">
                            <Button label="Login" className="btn btn-color btn-text btn-size btn-placement"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    
}


export default LoginCard;