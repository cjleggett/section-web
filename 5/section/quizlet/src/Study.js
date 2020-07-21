import React from 'react';
import './App.css';

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      front: true
    }
  }

  render = () => {
    let side = this.state.front ? "front" : "back";
    let cardContent = this.props.cards[this.state.currentCard][side];
    return (
      <div onClick={this.flip} className="card">
        <h3>{cardContent}</h3>
        <br></br><br></br><br></br><br></br>
        <button onClick={this.newCard}>New Card</button>
      </div>
    );
  }

  flip = () => {
    const nextSide = !this.state.front
    this.setState({
      front: nextSide
    });
  }

  newCard = () => {
    let newCard = Math.floor(Math.random() * this.props.cards.length);
    this.setState({
      currentCard: newCard,
      front: true
    });
  }
}

export default Study;
