import React, { useState } from 'react';
import {
  Switch as SwitchBase,
} from 'react-native';
import { withMarginAndPadding } from '../hocs';
import { compose } from 'redux';
import { useTheme } from '@react-navigation/native';

export const SwitchOld = compose(withMarginAndPadding)(
  ({ value = 0, onValueChange, ...rest }) => {

    // theme
    const { colors } = useTheme()

    // component state
    const [isEnabled, setIsEnabled] = useState(value == 1);

    return (
      <SwitchBase
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={colors.white}
        ios_backgroundColor={colors.border}
        onValueChange={value => {
          if (onValueChange) onValueChange(value);
          setIsEnabled(value);
        }}
        value={isEnabled}
        {...rest}
      />
    );
  },
);
