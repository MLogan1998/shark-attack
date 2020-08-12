import React from 'react';
import studentData from '../helpers/data/studentData';
import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const dearlyBeloved = studentData.dearlyBeloved();
    this.setState({ livingStudents, dearlyBeloved });
  }

  render() {
    return (
      <div className="App">
        <h2>Shark Attack!</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
