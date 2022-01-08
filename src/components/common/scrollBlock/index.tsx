import React from 'react';
import { ScrollBlockBase, ScrollBlockBaseProps } from './base';
import { withMarginAndPaddingProps, withStyleProps } from '../hocs';
import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native';

export interface ScrollBlockProps
  extends ScrollViewProps,
  ScrollBlockBaseProps,
  withStyleProps,
  withMarginAndPaddingProps {
  style?: StyleProp<ViewStyle>;
}

export function ScrollBlock(props: ScrollBlockProps) {
  const { ...rest } = props;
  return <ScrollBlockBase {...rest} />;
}
