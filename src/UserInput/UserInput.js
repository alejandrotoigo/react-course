import React from 'react';

const userInput = (props) => {
    const style = {
      backgroundColor: 'darkorange',
      width: '50%',
      margin: '0 auto',
      color: 'white',
      font: 'inherit',
      padding: '10px',
      border: '1px solid #000',
      borderShadow: '0px 2px 3px #ccc',
      textAlign: 'center'
    }; 

    return (
        <div style={style}>
            Please type a new username: <input type="text" onChange={props.change} value={props.username}/>
        </div>
    )
}

export default userInput;