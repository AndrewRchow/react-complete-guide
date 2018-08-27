import React, { Component } from 'react';
import classes from './App.css';
// import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "Ben", age: 2 },
      {id: 2, name: "Bruh", age: 24 },
      {id: 3, name: "Alex", age: 23 },
    ],
    otherState: 'something eles',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("clicked");
    // this.state.persons[0]="Maximilion";
    this.setState({
      persons: [
        {name: newName, age: 2 },
        {name: "Bruh", age: 24 },
        {name: "Alex", age: 23 },
      ]
    })
  }

  deletePersonHandler =(personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    console.log(this.state.persons);
  }

  nameChangedHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({persons: persons});
  }

  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    // const style= {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid black',
    //   padding: '8px',
    //   cursor: 'pointer'
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }

    let persons = null;
    let btnClass='';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            click={()=>this.deletePersonHandler(index)} 
            name={person.name} age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
     </div>
      );

      // style.backgroundColor = 'green';
      // style.color='white';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }

      btnClass=classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }

    return (
         <div className={classes.App}>
        <h1>his </h1>
        <p className = {assignedClasses.join(' ')}>this is working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Switch Name</button>
      {persons}
      </div>
     
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, "Hi I'm a react app"));
  }
}

export default App;
