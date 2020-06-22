import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: 'Alejandro', age: '26' },
      { id: 2, name: 'Sol', age: '23' },
      { id: 3, name: 'Maxi', age: '23' }
    ]
  });

  const [tooglePersonState, setTooglePersonState] = useState(false);

  const tooglePersons = () => {
    setTooglePersonState(!tooglePersonState);
  }

  const deletePersonHandler = (index) => {
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonsState({ persons: persons });
  }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id
    });

    const person = { ...personsState.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({ persons: persons })

  }

  let persons = null;

  if (tooglePersonState) {
    persons = personsState.persons.map((p, index) => {
      return <Person key={index}
        name={p.name}
        age={p.age}
        click={() => deletePersonHandler(index)}
        change={(event) => nameChangedHandler(event, p.id)} />
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <button onClick={tooglePersons}>Show/Hide persons</button>
      {persons}
    </div>
  );
}

export default App;
