import React from "react";

import './error-label.css';

export default function ErrorLabel(props) {
    return (
        <div className="error-label">{props.text}</div>
    );
}