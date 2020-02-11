import React from 'react';
import PropTypes from 'prop-types';
import Button from './BaseButton';

const ContainedButton = ({ inverted, ...props }) => {
  const buttonType = inverted ? 'secondary' : 'primary';

  return <Button buttonType={buttonType} {...props} />;
};

ContainedButton.displayName = 'Button';

ContainedButton.defaultProps = {
  inverted: false,
};

ContainedButton.propTypes = {
  inverted: PropTypes.bool,
};

export default ContainedButton;