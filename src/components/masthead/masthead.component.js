import React from "react";

import './masthead.css';


export default function Masthead() {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1 className="text-white title">Welcome back</h1>
                        <a className="text-white underline subtitle" href="/signup">New to MicroVentures? Create an account</a>
                    </div>
                </div>
            </div>
        </header>
    );
}