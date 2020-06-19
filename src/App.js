import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Alejandro', age: '26'},
      {name: 'Sol', age: '23'},
      {name: 'Maxi', age: '23'}
    ]
  });

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies are: Eat icecream</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
