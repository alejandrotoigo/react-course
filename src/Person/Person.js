import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <div    style={{textAlign:"right", cursor:"pointer"}}
                    onClick={props.click}>x</div>
            <p>Hi I'm {props.name} and I'm {props.age} years old.</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default person;