import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: '',
    length: 0,
    characters: []
  }


  countChars = (event) => {
    const text = event.target.value;
    const characters = text.split('');
    const length = characters.length;

    this.setState({ 
      text: text,
      length: length,
      characters: characters
    });
  }

  removeChar = (index) => {
    const characters = [...this.state.characters];

    characters.splice(index, 1);

    this.setState({
      text: characters.join(''),
      length: characters.length,
      characters: characters
    });
  }


  render() {
    let chars = this.state.characters.map((char, index) => {
      return <CharComponent char={char}
                            key={index}
                            click={this.removeChar.bind(this, index)}/>
    });

    return (
      <div className="App">
        <h1 style={{textAlign: 'center'}}>List & Conditionals practice</h1>
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <h2>Resolution</h2>
        Type text: <input type="text" value={this.state.text} onChange={this.countChars.bind(this)}></input>
        <p>The length of the text is: {this.state.length}</p>
        <ValidationComponent length={this.state.length}/>
        {chars}
      </div>
    );
  }
}

export default App;

