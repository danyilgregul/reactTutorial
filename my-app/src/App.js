import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [ // array of objects
      { name: 'Danyil', age: 25, belt: 'black', id:1 },
      { name: 'Felix', age: 43, belt: 'yellow', id:2 },
      { name: 'Max', age: 78, belt: 'white', id:3 }    
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} /> {/*imported from Ninjas.js*/}
      </div>
    );
  }
}

export default App;
