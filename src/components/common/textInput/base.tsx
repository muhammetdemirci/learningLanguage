import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { withMarginAndPadding } from '../hocs';
import { compose } from 'redux';

export interface TextInputBaseProps extends TextInputProps {
  itemRef?: Function;
}

export const TextInputBase = compose(
  withMarginAndPadding
)(
  (props: TextInputBaseProps) => {
    return <RNTextInput
      textContentType={'none'}
      autoCorrect={false}
      ref={(ref) => props.itemRef && props.itemRef(ref)}
      {...props} />;
  },
);
