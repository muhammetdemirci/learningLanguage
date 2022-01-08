import {
  DefaultTheme as RNDefaultTheme,
  DarkTheme as RNDarkTheme,
  Theme,
} from "@react-navigation/native";

declare global {
  interface AppTheme extends Theme {
    dark: boolean;
    colors: {
      card: string;
      notification: string;
      text: string;
      border: string;
      primary: string;
      background: string;
      "background-game": string;
      "button-disable": string;

      correct: string;
      wrong: string;
    };
  }
}

export const DefaultTheme = {
  ...RNDefaultTheme,
  colors: {
    ...RNDefaultTheme.colors,

    text: "#ffffff",
    background: "rgb(117,219,253)",
    "background-game": "rgb(60,109,129)",
    "button-disable": "rgb(100,147,167)",
    correct: "rgb(36,229,233)",
    wrong: "rgb(255,140,140)",
  },
};

export const DarkTheme = {
  ...RNDarkTheme,
  colors: {
    ...RNDarkTheme.colors,
  },
};
