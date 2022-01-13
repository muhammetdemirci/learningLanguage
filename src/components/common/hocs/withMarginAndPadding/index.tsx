import React from 'react'
import { ViewStyle } from 'react-native'
import { handleMargins, handlePaddings } from './utils'

export interface withMarginAndPaddingProps {
  margin?: number | Array<number> | undefined
  padding?: number | Array<number> | undefined
  style?: ViewStyle | undefined
}

export type InjectedWithMarginPaddingProps = withMarginAndPaddingProps
export type HocWithMarginPaddingProps<T> = Omit<
  T,
  keyof InjectedWithMarginPaddingProps
>

export function withMarginAndPadding<T extends withMarginAndPaddingProps>(
  Component: React.ComponentType<HocWithMarginPaddingProps<T>>
) {
  return ({ margin, padding, style, ...rest }: T) => {
    return (
      <Component
        {...rest}
        style={[
          margin && handleMargins(margin),
          padding && handlePaddings(padding),
          style,
        ]}
      />
    )
  }
}
