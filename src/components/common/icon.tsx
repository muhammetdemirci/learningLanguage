import React, { ComponentType } from "react";
import { compose } from "redux";
import { withMarginAndPadding } from "./hocs";
import { getIcon, IconName } from "../../assets/icons/utils";
import { TouchableOpacity, TouchableOpacityProps } from "./touchableOpacity";
import { ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";

export interface IconProps extends TouchableOpacityProps {
  name: IconName;

  width?: number;
  height?: number;

  size?: number;
  iconColor?: string;
  isTouchable?: boolean;

  loading?: boolean;
}

export const Icon = compose<ComponentType<IconProps>>(withMarginAndPadding)(
  ({
    name,
    width,
    height,
    iconColor,
    size = 20,
    isTouchable = false,
    loading = false,
    ...rest
  }: IconProps) => {
    // colors
    const { colors } = useTheme() as AppTheme;

    const Icon = getIcon(name);
    return (
      <TouchableOpacity disabled={!isTouchable} {...rest}>
        {loading ? (
          <ActivityIndicator size={15} color={colors.text} />
        ) : (
          <Icon
            width={width ? width : size}
            height={height ? height : size}
            color={iconColor || colors.text}
          />
        )}
      </TouchableOpacity>
    );
  }
);
