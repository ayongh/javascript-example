import React, {Component} from 'react';
import './App.css';
import USERS from '../src/users/users'


class App extends Component {
  render(){
    return (
      <div className="App">
        <USERS/>
      </div>
    );

  }
  
}

export default App;
