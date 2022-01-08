import React from 'react';
import {
  TouchableWithoutFeedbackBase,
  TouchableWithoutFeedbackBaseProps,
} from './base';
import { withStyleProps, withMarginAndPaddingProps } from '../hocs';
import { StyleProp, ViewStyle } from 'react-native';

export interface TouchableWithoutFeedbackProps
  extends TouchableWithoutFeedbackBaseProps,
  withStyleProps,
  withMarginAndPaddingProps {
  style?: StyleProp<ViewStyle>;
}

export function TouchableWithoutFeedback(
  props: TouchableWithoutFeedbackProps,
) {
  const {
    ...rest
  } = props;
  return (
    <TouchableWithoutFeedbackBase
      {...rest}
    />
  );
}
