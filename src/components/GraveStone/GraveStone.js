import React from 'react';
import studentShape from '../../helpers/data/props/studentShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    gravestone: studentShape.studentShape,
  }

  render() {
    const { gravestone } = this.props;

    return (
      <div className="deadman">
      <i className="fas fa-dizzy fa-2x"></i>
      <p>{gravestone.firstName}</p>
      </div>
    );
  }
}

export default GraveStone;
