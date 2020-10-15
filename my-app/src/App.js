import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [ // array of objects
      { name: 'Danyil', age: 25, belt: 'black', id:1 },
      { name: 'Felix', age: 43, belt: 'yellow', id:2 },
      { name: 'Max', age: 78, belt: 'white', id:3 }    
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} /> {/*imported from Ninjas.js*/}
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
