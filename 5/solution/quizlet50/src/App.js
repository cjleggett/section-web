import React from 'react';
import Edit from './Edit.js';
import Study from './Study.js';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: "edit",
      cards: []
    }
  } 

  render = () => {
    let content;
    if (this.state.currentPage === "edit") {
      content = <Edit add={this.addCard}/>;
    } else {
      console.log(this.state.cards);
      content = <Study cards={this.state.cards}/>;
    }

    return (
      <div className="App">
        <h1>Welcome to Quizlet50!</h1>
        <div className="btn-group">
          <button onClick={() => this.togglePage("edit")} type="button" className="btn btn-primary">Create Cards</button>
          <button onClick={() => this.togglePage("study")} type="button" className="btn btn-primary">Study</button>
        </div>
        <br/><br/><br/>
        <div>
          {content}
        </div>
      </div>
    );
  }

  togglePage = newPage => {
    if (newPage === "study" && this.state.cards.length === 0) {
      alert("Create some cards before studying!");
      return;
    }
    this.setState({
      currentPage: newPage
    })
  }

  addCard = (front, back) => {
    let cards = [...this.state.cards];
    cards.push({"front": front, "back": back});
    this.setState({
      cards: cards
    })
  }
}

export default App;
