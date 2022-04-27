import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // This calls the constructor method of Component

    /*
        this.state = {
          monsters: [
            { id: "f9rwer", name: 'Linda' },
            { id: "Itr5e5", name: 'Frank' },
            { id: "8Or458", name: 'Jacky' }
          ]
        };
    */

    this.state = {
      monsters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((respond) => respond.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monsters) => {
            return <h1 key={monsters.id}> {monsters.name} </h1> // key must to be added to the parent tag only
          })
        }
      </div>
    );
  }
}


export default App;
