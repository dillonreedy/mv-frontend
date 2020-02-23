import React from 'react';

import './button.css';

function Button(props) {
    return (
        <button type="submit" className={props.className}>{props.label}</button>
    );
}

export default Button;