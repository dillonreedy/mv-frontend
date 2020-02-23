import React from 'react';
import ErrorLabel from '../error-label/error-label.component';

function Checkbox(props) {
    return (
        <div>
            <div className="form-check mb-2">
                <input name="consent" 
                    type="checkbox" 
                    className="form-check-input" 
                    id="consent-checkbox"
                    value={props.value} 
                    checked={props.checked} 
                    onChange={props.handleChange}/>
                <label className="form-check-label" htmlFor="consent-checkbox">{props.label}</label>
            </div>
            { !(props.errorText) ?  '' : <ErrorLabel text={props.errorText}/> }
        </div>
    );
}

export default Checkbox;