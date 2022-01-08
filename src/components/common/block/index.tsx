import React from 'react';
import { BlockBase, BlockBaseProps } from './base';
import { withMarginAndPaddingProps, withStyleProps } from '../hocs';
import { StyleProp, ViewStyle } from 'react-native';

export interface BlockProps
  extends BlockBaseProps,
  withStyleProps,
  withMarginAndPaddingProps {
  style?: StyleProp<ViewStyle>
}

export function Block(props: BlockProps) {
  const {
    ...rest
  } = props;
  return (<BlockBase {...rest} />);
}
