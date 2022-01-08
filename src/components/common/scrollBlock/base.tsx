import React, { ComponentType } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import { withMarginAndPadding, withStyle } from '../hocs';
import { compose } from 'redux';
import { RefreshControl } from 'react-native';
import { useTheme } from '@react-navigation/native';

export interface ScrollBlockBaseProps extends ScrollViewProps {
  showRefreshControl?: boolean,
  loading?: boolean;
  onRefresh?: () => void;
}

export const ScrollBlockBase = compose<ComponentType>(
  withMarginAndPadding,
  withStyle,
)(({
  style,
  contentContainerStyle,
  showRefreshControl = false,
  loading,
  onRefresh,
  ...rest
}: ScrollBlockBaseProps) => {

  const { colors } = useTheme()

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[{ backgroundColor: colors.background }, style]}
      refreshControl={showRefreshControl ? <RefreshControl
        tintColor={colors.primary}
        refreshing={loading}
        style={{
          backgroundColor: colors.background,
        }}
        onRefresh={() => onRefresh()}
      /> : null}
      contentContainerStyle={[{ paddingBottom: 60 }, contentContainerStyle]}
      {...rest}
    />
  );
});
