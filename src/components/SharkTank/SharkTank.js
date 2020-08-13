import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LivingStudent/LivingStudent';
import studentShape from '../../helpers/data/props/studentShape';
import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { livingStudents } = this.props;
    const livingCards = livingStudents.map((livingStudent) => (
      <LiveStudent key={livingStudent.id} livingStudent={livingStudent} />
    ));

    return (
      <div className ="cont">
        <button type="button" className="btn btn-danger">ATTACK</button>
      <div className ="tank">
        { livingCards }
      </div>
      </div>
    );
  }
}

export default SharkTank;
