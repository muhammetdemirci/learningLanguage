import React, { ComponentType } from 'react';
import {
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
} from 'react-native';
import { withStyle, withMarginAndPadding } from '../hocs';
import { compose } from 'redux';

export interface TouchableWithoutFeedbackBaseProps
  extends TouchableWithoutFeedbackProps { }

export const TouchableWithoutFeedbackBase = compose<ComponentType>(
  withStyle,
  withMarginAndPadding
)(
  (props: TouchableWithoutFeedbackBaseProps) => {
    return <TouchableWithoutFeedback {...props} />;
  },
);
