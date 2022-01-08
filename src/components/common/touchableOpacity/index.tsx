import React from 'react';
import { TouchableOpacityBase, TouchableOpacityBaseProps } from './base';
import { withMarginAndPaddingProps, withStyleProps } from '../hocs';
import { StyleProp, ViewStyle } from 'react-native';

export interface TouchableOpacityProps
  extends TouchableOpacityBaseProps,
  withStyleProps,
  withMarginAndPaddingProps {
  style?: StyleProp<ViewStyle>;
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const {
    ...rest
  } = props;
  return (
    <TouchableOpacityBase
      {...rest}
    />
  );
}
