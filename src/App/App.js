import React from 'react';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
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
    const { livingStudents } = this.state;

    return (
      <div className="App">
        <h1>Shark Attack!</h1>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
