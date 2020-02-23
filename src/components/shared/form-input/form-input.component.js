import React from 'react';
import ErrorLabel from '../error-label/error-label.component';

import './form-input.css';

export default function FormInput(props) {
    return (
        <div className="form-group">
            <label className="form-input-label">{props.label}</label>
            <input  className="form-control form-input mb-2" 
                    name={props.name}
                    type={props.type}
                    data-error-name={props.dataErrorName} 
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={props.handleChange}
                    />
            { !(props.errorText) ?  '' : <ErrorLabel text={props.errorText}/> }
        </div>
    );
}