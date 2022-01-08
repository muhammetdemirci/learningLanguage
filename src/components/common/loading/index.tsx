import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { Block } from '../block';

export interface LoadingProps extends ActivityIndicatorProps {
  backgroundColor?: string;
  flex?: number;

  margin?: Array<number> | number;
}

export function Loading({
  flex = 1,
  size = 'small',
  color,
  backgroundColor,
  margin,
  ...rest
}: LoadingProps) {
  // theme
  const { colors } = useTheme()

  return (
    <Block
      flex={flex}
      justifyCenter
      alignCenter
      color={backgroundColor || colors.background}
      margin={margin}
    >
      <ActivityIndicator {...rest} size={size} color={color || colors.primary} />
    </Block>
  );
}
