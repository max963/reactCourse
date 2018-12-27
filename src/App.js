import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id: '11', name: 'Max', age: 28},
      {id: '22', name: 'Manu', age: 27},
      {id: '33', name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons =  (
        
        <div>
            {this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                />
            })}
        </div>
       );

       style.backgroundColor = 'red';

    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1)
    {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Dolly guaraná!</h1>
        <p className={assignedClasses.join(' ')}>React é zika</p>
        <button style={style} onClick={this.tooglePersonHandler}>Switch Name</button>
          
            {persons}
          
      </div>
    );
  }
}

export default App;