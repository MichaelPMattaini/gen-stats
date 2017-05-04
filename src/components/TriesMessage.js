import React, { PropTypes } from 'react';

const TriesMessage = props => {
  return(
    <h2>{props.message}</h2>
  );
}

TriesMessage.propTypes = {
  message: PropTypes.string,
};

TriesMessage.defaultProps = {
  message: null,
};

export default TriesMessage;
