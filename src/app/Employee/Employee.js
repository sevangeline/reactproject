import React from 'react';
import ReactDOM from 'react-dom';

const employee = (props) => {

    return (
        <div className="employee">
            <h3> Name : {props.name}</h3>
            <h3> Age : {props.age}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default employee;
