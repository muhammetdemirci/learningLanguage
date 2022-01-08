import React from 'react';
import { Image as ImageBase, ImageProps as ImageBaseProps } from 'react-native';

export interface ImageProps extends ImageBaseProps {
}

export function Image(props: ImageProps) {
  const {
    ...rest
  } = props;
  return (<ImageBase {...rest} />);
}
