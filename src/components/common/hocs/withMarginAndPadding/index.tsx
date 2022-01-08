import React from 'react';
import { StyleProp } from 'react-native';
import { handleMargins, handlePaddings } from './utils';

export interface withMarginAndPaddingProps {
  margin?: number | Array<number>;
  padding?: number | Array<number>;
  style?: StyleProp<any>;
}

export function withMarginAndPadding<T extends withMarginAndPaddingProps>(
  Component: Function,
) {
  return (props: T) => {
    const { margin, padding, style, ...rest } = props;
    return (
      <Component
        {...rest}
        style={[
          margin && handleMargins(margin),
          padding && handlePaddings(padding),
          style
        ]}
      />
    );
  };
}

