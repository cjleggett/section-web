import React from 'react';
import './App.css';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "",
      back: ""
    }
  }

  render = () => {
    return (
      <div>
        <form id="newCard">
          <textarea onChange={event => this.handleChange(true, event)} placeholder="Term"></textarea>
          <textarea onChange={event => this.handleChange(false, event)} placeholder="Definition"></textarea>
        </form>
        <button onClick={this.createCard}>Add Card!</button>
      </div>
    );
  }

  handleChange = (front, event) => {
    if (front) {
      this.setState({front: event.target.value});
    } else {
      this.setState({back: event.target.value});
    }
  }

  createCard = () => {
    document.getElementById("newCard").reset();
    this.props.add(this.state.front, this.state.back);
  }

  
}

export default Edit;
