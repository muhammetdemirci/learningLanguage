import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { styles, BORDER_WIDTH, BORDER_RADIUS } from "./styles";

export interface withStyleProps {
  flex?: boolean | number;
  row?: boolean;
  column?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  justifyCenter?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  between?: boolean;
  around?: boolean;

  width?: number | string;
  minWidth?: number | string;

  height?: number | string;
  minHeight?: number | string;

  borderRadius?: boolean | number;
  borderWidth?: boolean | number;
  borderColor?: boolean | string;

  borderTopWidth?: boolean | number;
  borderTopColor?: boolean | string;

  borderBottomWidth?: boolean | number;
  borderBottomColor?: boolean | string;

  borderLeftWidth?: boolean | number;
  borderLeftColor?: boolean | string;

  borderRightWidth?: boolean | number;
  borderRightColor?: boolean | string;

  color?: string | undefined | null;
  style?: StyleProp<ViewStyle>;
  children?: any; // TODO
}

export function withStyle<T extends withStyleProps>(Component: Function) {
  return ({
    flex,
    row,
    column,
    alignCenter,
    alignStart,
    alignEnd,
    justifyCenter,
    justifyStart,
    justifyEnd,
    between,
    around,

    width,
    minWidth,
    height,
    minHeight,

    borderRadius,
    borderWidth,
    borderColor,

    borderTopWidth,
    borderTopColor,

    borderBottomWidth,
    borderBottomColor,

    borderLeftWidth,
    borderLeftColor,

    borderRightWidth,
    borderRightColor,

    color,
    style,
    ...rest
  }: T) => {
    // theme
    const { colors } = useTheme() as AppTheme;

    return (
      <Component
        style={[
          flex && (typeof flex === typeof true ? styles.flex : { flex }),
          row && styles.row,
          column && styles.column,
          alignCenter && styles.alignCenter,
          alignStart && styles.alignStart,
          alignEnd && styles.alignEnd,
          justifyCenter && styles.justifyCenter,
          justifyStart && styles.justifyStart,
          justifyEnd && styles.justifyEnd,
          between && styles.between,
          around && styles.around,

          width && { width },
          minWidth && { minWidth },

          height && { height },
          minHeight && { minHeight },
          { borderColor: colors.border },

          borderRadius &&
            (typeof borderRadius === typeof 2
              ? { borderRadius }
              : {
                  borderRadius: BORDER_RADIUS,
                }),
          borderWidth &&
            (typeof borderRadius === typeof 2
              ? { borderWidth }
              : {
                  borderWidth: BORDER_WIDTH,
                }),
          borderColor &&
            (typeof borderColor === typeof "" ? { borderColor } : null),

          borderTopWidth &&
            (typeof borderTopWidth === typeof 2 ? { borderTopWidth } : null),
          borderTopColor &&
            (typeof borderTopColor === typeof "" ? { borderTopColor } : null),

          borderBottomWidth &&
            (typeof borderBottomWidth === typeof 2
              ? { borderBottomWidth }
              : null),
          borderBottomColor &&
            (typeof borderBottomColor === typeof ""
              ? { borderBottomColor }
              : null),

          borderLeftWidth &&
            (typeof borderLeftWidth === typeof 2
              ? { borderLeftWidth }
              : {
                  borderLeftWidth: BORDER_WIDTH,
                }),
          borderLeftColor &&
            (typeof borderLeftColor === typeof "" ? { borderLeftColor } : null),

          borderRightWidth &&
            (typeof borderRightWidth === typeof 2
              ? { borderRightWidth }
              : {
                  borderRightWidth: BORDER_WIDTH,
                }),
          borderRightColor &&
            (typeof borderRightColor === typeof ""
              ? { borderRightColor }
              : null),

          color && { backgroundColor: color },
          style,
        ]}
        {...rest}
      />
    );
  };
}
