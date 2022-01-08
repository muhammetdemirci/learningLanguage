import React, { ComponentType } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { withMarginAndPadding, withStyle } from '../hocs';
import { compose } from 'redux';

export interface TouchableOpacityBaseProps extends TouchableOpacityProps { }

export const TouchableOpacityBase = compose<ComponentType>(
  withStyle,
  withMarginAndPadding
)(
  (props: TouchableOpacityBaseProps) => {
    return <TouchableOpacity {...props} />;
  },
);
