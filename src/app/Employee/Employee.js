import React from 'react';
import ReactDOM from 'react-dom';

const employee = (props) => {

    return (
        <div className="employee">
            <h3> Name : {props.name}</h3>
            <h3> Age : {props.age}</h3>
            <p>{props.children}</p>
            {props.swapName ? <button onClick={props.swapName}></button> : null}
        </div>
    )
}

export default employee;
