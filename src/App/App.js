import React from 'react';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import GraveYard from '../components/Graveyard/Graveyard';

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

  followTheLight = (studentId) => {
    studentData.followTheLight(studentId);
    const livingStudents = studentData.livingStudents();
    const dearlyBeloved = studentData.dearlyBeloved();
    this.setState({ livingStudents, dearlyBeloved });
  };

  render() {
    const { livingStudents, dearlyBeloved } = this.state;

    return (
      <div className="App">
        <h1>Shark Attack!</h1>
        <SharkTank livingStudents={livingStudents} followTheLight={this.followTheLight} />
        <GraveYard dearlyBeloved={dearlyBeloved} />
      </div>
    );
  }
}

export default App;
