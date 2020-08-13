import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/data/props/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { livingStudents } = this.props;
    const livingCards = livingStudents.map((student) => (
      // <LiveStudent key={student.id} student={student} />
    ));

    return (
      <div className ="tank">
        { livingCards }
      </div>
    );
  }
}

export default SharkTank;
