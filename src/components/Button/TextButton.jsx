import React from 'react';
import Button from './BaseButton';

const TextButton = props => <Button buttonType="text" {...props} />;

TextButton.displayName = 'Button.Text';

export default TextButton;