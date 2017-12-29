import React from 'react';
import PropTypes from 'prop-types';

const Guest = (props) => {
  const onRemoveClick = () => {
    props.onRemove(props.name);
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.children}</td>
      <td>
        <button
          type='button'
          className='close'
          onClick={onRemoveClick}
        >
          <span>&times;</span>
        </button>
      </td>
    </tr>
  );
}

Guest.propTypes = {
  onRemove: PropTypes.func.isRequired
};

export default Guest;
