import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // This calls the constructor method of Component


    this.state = {
      monster: [
        { id: "f9rwer", name: 'Linda' },
        { id: "Itr5e5", name: 'Frank' },
        { id: "8Or458", name: 'Jacky' }
      ]
    };
  }

    render(){
      return (
        <div className="App">
          {
            this.state.monster.map((monster) => {
              return <h1 key= {monster.id}> {monster.name} </h1>
            })
          }
        </div>
      );
    }
  }


export default App;
