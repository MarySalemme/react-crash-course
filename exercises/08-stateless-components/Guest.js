import React from 'react';
import PropTypes from 'prop-types';

class Guest extends React.Component {
  onRemoveClick() {
    this.props.onRemove(this.props.name);
  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.children}</td>
        <td>
          <button
            type='button'
            className='close'
            onClick={this.onRemoveClick.bind(this)}
          >
            <span>&times;</span>
          </button>
        </td>
      </tr>
    );
  }
}

Guest.propTypes = {
  onRemove: PropTypes.func.isRequired
};

export default Guest;
