
import React from 'react';

import FormInput from '../shared/form-input/form-input.component';
import Button from '../shared/button/button.component';
import Checkbox from '../shared/checkbox/checkbox.component';
import FailedAttempt from '../shared/failed-attempt/failed-attempt.component';

import signupService from '../../services/signupService';

import './signup-form.css';

const initialState = {
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    referralSource: '',
    consent: false,
    consentError: '',
    failedSignupMsg: '',
}

class SignupForm extends React.Component {
    state = initialState;

    change = e => {
        if (e.target.type === 'checkbox') this.setState({[e.target.name]: e.target.checked})
        else this.setState({ [e.target.name]: e.target.value });
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

        if (!(this.state.firstName))
        {
            this.setState({firstNameError: 'This field is required'});
            isValid = false;
        }

        if (!(this.state.lastName))
        {
            this.setState({lastNameError: 'This field is required'});
            isValid = false;
        }

        if (!this.state.consent)
        {
            this.setState({consentError: 'This field is required'});
            isValid = false;
        }

        return isValid;
    }

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        console.log(isValid);
        if (isValid)
        {
            signupService.signup({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                referralSource: this.state.referralSource,
            }).then(signedUp => {
                console.log(`signedUp: ${signedUp}`);
                if (signedUp)
                {
                    window.confirm(`The user has successfully signed up.`);
                    this.setState(initialState);
                }
                else {
                    this.setState({failedSignupMsg: 'An account with this email already exists.'});
                }
            });
        }
    }

    render() {
        return (
            <div className="container justify-content-center px-4 signup-form">
                <form noValidate="noValidate" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col registration-form-header">
                            <h2>Let's get started</h2>
                            <div className="spacer"/>
                            <a href="/login" className="text-green">or Log In</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <FormInput
                                label="First name"
                                name="firstName"
                                type="text"
                                placeholder="John"
                                errorName="firstNameError"
                                value={this.state.firstName}
                                handleChange={(e) => this.change(e)}
                                errorText={this.state.firstNameError}
                                />
                        </div>
                        <div className="col-md-6">
                            <FormInput
                                label="Last name"
                                name="lastName"
                                type="text"
                                placeholder="Smith"
                                value={this.state.lastName}
                                handleChange={(e) => this.change(e)}
                                errorText={this.state.lastNameError}
                                />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <FormInput
                                label="Email address"
                                name="email"
                                type="email"
                                placeholder="email@address.com"
                                value={this.state.email}
                                handleChange={(e) => this.change(e)}
                                errorText={this.state.emailError}
                                />
                        </div>
                        <div className="col-md-6">
                            <FormInput
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                handleChange={(e) => this.change(e)}
                                errorText={this.state.passwordError}
                                />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <FormInput
                                label="How did you hear about us?"
                                optional={true}
                                name="referralSource"
                                type="text"
                                placeholder=""
                                value={this.state.referralSource}
                                handleChange={(e) => this.change(e)}
                                />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Checkbox
                                value={this.state.consent}
                                checked={this.state.consent}
                                handleChange={(e) => this.change(e)}
                                label="I consent to the use of my personal information as outlined in the User Agreement and certify that I have read and understand the policies and agreements below."
                                errorText={this.state.consentError}
                                />
                        </div>
                    </div>

                    <FailedAttempt errorText={this.state.failedSignupMsg}/>

                    <div className="row mt-2">
                        <div className="col">
                            <Button label="Submit" className="btn-color btn-text btn-size btn-rounded-edges btn-no-border btn-shadow" />
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignupForm;