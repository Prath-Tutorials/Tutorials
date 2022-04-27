import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // This calls the constructor method of Component


    this.state = {
      monster: [
        { name: 'Linda' },
        { name: 'Frank' },
        { name: 'Jacky' }
      ]
    };
  }

    render(){
      return (
        <div className="App">
          {
            this.state.monster.map((monster) => {
              return <h1> {monster.name} </h1>
            })
          }
        </div>
      );
    }
  }


export default App;
