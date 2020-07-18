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
    let cardContent;
    if (this.state.front) {
      cardContent = this.props.cards[this.state.currentCard]["front"];
    } else {
      cardContent = this.props.cards[this.state.currentCard]["back"];
    }
    return (
      <div onClick={this.flip} className="card">
        <div className="card-body">
          <h3 className="card-title">{cardContent}</h3>
          <br/><br/><br/><br/>
          <button onClick={this.newCard}>New Card</button>
        </div>
      </div>
    );
  }

  flip = () => {
    const nextSide = !this.state.front;
    this.setState({
      front: nextSide
    });
  }

  newCard = () => {
    if (this.props.cards.length === 1) {
      alert("Only one card!");
      return;
    }

    const current = this.state.currentCard;
    let newCard = current;
    while (newCard === current) {
      newCard = Math.floor(Math.random() * this.props.cards.length)
    }

    this.setState({
      currentCard: newCard,
      front: true
    })
    
  }
}

export default Study;
