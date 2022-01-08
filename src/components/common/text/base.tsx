import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { withMarginAndPadding } from '../hocs';
import { compose } from 'redux';

export interface TextBaseProps extends TextProps { }

export const TextBase = compose(
  withMarginAndPadding
)(
  (props: TextBaseProps) => {
    return <RNText {...props} />;
  },
);
