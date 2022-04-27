import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super(); // This calls the constructor method of Component

    this.state = {
      name: 'Prathep',
      company: 'Microsoft'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi this is {this.state.name}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState({name: 'Thurairatnam'}) //this.setState is updating the state to a different object || This is shallow merging
            console.log(this.state);
          }}>
            Change Name
          </button>
            
          
        </header>
      </div>
    );
  }
}


export default App;
