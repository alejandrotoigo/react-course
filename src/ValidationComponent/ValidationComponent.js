import React from 'react';

const validationComponent = (props) => {
    let typeText = <p style={{color: 'red'}}>Text too short</p>;

    if(props.length > 5) {
        typeText = <p style={{color: 'green'}}>Text long enough</p>;
    }

    return (
        <div>
            {typeText}
        </div>
    )
}

export default validationComponent;