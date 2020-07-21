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
      content = <Study cards={this.state.cards}/>;
    }

    console.log(this.state.cards);

    return (
      <div>
        <h1>This is Quizlet50!</h1>
        <div className="btn-group">
          <button onClick={() => this.togglePage("edit")}>Create Cards</button>
          <button onClick={() => this.togglePage("study")}>Study</button>
        </div>
        {content}
      </div>
    )
  }

  togglePage = newPage => {
    if (newPage === "study" && this.state.cards.length === 0) {
      alert("Make some cards first!");
      return;
    }

    this.setState({
      currentPage: newPage
    });
  }

  addCard = (front, back) => {
    let cards = [...this.state.cards];
    cards.push({"front": front, "back": back});
    this.setState({
      cards: cards
    });
  }
}

export default App;
