import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // This calls the constructor method of Component

    /*
        this.state = {
          monster: [
            { id: "f9rwer", name: 'Linda' },
            { id: "Itr5e5", name: 'Frank' },
            { id: "8Or458", name: 'Jacky' }
          ]
        };
    */

    this.state = {
      monster: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((respond) => respond.json())
      .then((users) => console.log(users))
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monster.map((monster) => {
            return <h1 key={monster.id}> {monster.name} </h1> // key must to be added to the parent tag only
          })
        }
      </div>
    );
  }
}


export default App;
