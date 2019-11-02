import React, {Component} from 'react';
import './App.css';
import charector from "./components/card/charectors.json"
import Board from "./components/board/board"
import Jumbotron from "./components/Jumbotron/jumbo"
import Header from "./components/Header/header"

class App extends Component {
  state = {
    charectors: charector

  }
clickPic = event => {
  console.log(event.target.dataset.id)
}
  render(){
  return (
    <div className="App">
    <Jumbotron />
    <Header />
     <Board images = {this.state.charectors} myfunk = {this.clickPic} />
    </div>
  );
  }
}
export default App;

// export default function App(){
// return(
//   <div>
//  <h2>Can you remember the card</h2>
//  <card 
//  id = (1)
//  width = {100}
//  height = {100}
// back = {/img}
// front = {/img} 
// flipped = {flipped.includes}
//   </div>

// ) 
// }









