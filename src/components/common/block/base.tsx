import React, { ComponentType } from 'react';
import { View, ViewProps } from 'react-native';
import { withMarginAndPadding, withStyle } from '../hocs';
import { compose } from 'redux';

export interface BlockBaseProps extends ViewProps { }

export const BlockBase = compose<ComponentType>(
  withMarginAndPadding,
  withStyle
)(
  (props: BlockBaseProps) => {
    return <View {...props} />;
  }
);
