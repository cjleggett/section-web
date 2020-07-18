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
        <form id="newcard">
          <textarea onChange={event => this.handleChange(true, event)} placeholder="Term"></textarea>
          <textarea onChange={event => this.handleChange(false, event)} placeholder="Definition"></textarea>
          <br/>
        </form>
        <button onClick={this.sub}>Add Card!</button>
      </div>
    );
  }

  handleChange = (front, event) => {
    event.preventDefault();
    if (front) {
      this.setState({front: event.target.value});
    } else {
      this.setState({back: event.target.value});
    }
  }

  sub = () => {
    document.getElementById("newcard").reset();
    this.props.add(this.state.front, this.state.back);
  }
}

export default Edit;
