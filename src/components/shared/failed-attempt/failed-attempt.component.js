import React from 'react';
import ErrorLabel from '../error-label/error-label.component';


function FailedAttempt(props)
{
    if (!(props.errorText)) return null;

    return (
    <div className="row justify-content-center pb-3">
        <div className="col">
            <ErrorLabel text={props.errorText}/>
        </div>
    </div>
    );

}

export default FailedAttempt;