import React from 'react';
import studentShape from '../../helpers/data/props/studentShape';
import './LivingStudent.scss';

class LivingStudent extends React.Component {
  static propTypes = {
    livingStudent: studentShape.studentShape,
  }

  render() {
    const { livingStudent } = this.props;

    return (
      <div className="fishie">
      <i className="fas fa-fish fa-lg fa-2x"></i>
      <p>{livingStudent.firstName}</p>
      </div>
    );
  }
}

export default LivingStudent;
