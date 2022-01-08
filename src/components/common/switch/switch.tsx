import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SwitchFull,
  SwitchProps as SwitchFullProps,
} from "react-native-switch-full-custom";
import { Block } from "../block";

export interface SwitchProps extends SwitchFullProps {
  defaultValue?: boolean;
  color?: string;
}

export function Switch({
  defaultValue = false,
  circleSize = 14,
  color,
  onValueChange,
}: SwitchProps) {
  // theme
  const { colors } = useTheme() as AppTheme;

  // state
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <SwitchFull
      value={value}
      onValueChange={(val) => {
        setValue(val);
        if (onValueChange) onValueChange(val);
      }}
      disabled={false}
      circleSize={circleSize}
      barHeight={24}
      circleBorderWidth={0}
      backgroundActive={color || colors.primary}
      backgroundInactive={colors.secondary}
      circleActiveColor={"#fff"}
      circleInActiveColor={"#fff"}
      changeValueImmediately={true}
      renderInsideCircle={() => (
        <Block
          width={circleSize}
          height={circleSize}
          borderRadius={circleSize / 2}
        />
      )}
      //   renderInsideCircle={() => <null />} // custom component to render inside the Switch circle (Text, Image, etc.)
      innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
      outerCircleStyle={{}} // style for outer animated circle
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
      switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
      switchWidthMultiplier={3.2} // multipled by the `circleSize` prop to calculate total width of the Switch
      switchBorderRadius={14} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
    />
  );
}
