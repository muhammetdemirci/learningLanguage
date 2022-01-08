import React from 'react';
import { TextInputBase, TextInputBaseProps } from './base';
import { withMarginAndPaddingProps } from '../hocs';
import { StyleProp, TextStyle } from 'react-native';

export interface TextInputProps
  extends TextInputBaseProps,
    withMarginAndPaddingProps {
  style?: StyleProp<TextStyle>;
}

export function TextInput({ ...rest }: TextInputProps) {
  return <TextInputBase {...rest} />;
}
