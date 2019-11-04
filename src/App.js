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
  }}
  export default App;













