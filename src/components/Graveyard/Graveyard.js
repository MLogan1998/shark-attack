import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/data/props/studentShape';
import GraveStone from '../GraveStone/GraveStone';

class GraveYard extends React.Component {
  static propTypes = {
    dearlyBeloved: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { dearlyBeloved } = this.props;
    const graveStone = dearlyBeloved.map((gravestone) => (
      <GraveStone key={gravestone.id} gravestone={gravestone} />
    ));

    return (
      <div className="graveYard">
        <h1>Graveyard</h1>
      <div className="graveCont">
        { graveStone }
      </div>
      </div>
    );
  }
}

export default GraveYard;
