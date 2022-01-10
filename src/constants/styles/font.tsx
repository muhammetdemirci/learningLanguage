declare global {
  type FontFamily =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "title"
    | "subtitle"
    | "button"
    | "link"
    | "body1"
    | "body2"
    | "helper"
    | "caption"
    | "overline"
    | "label";

  interface FontStyle {
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
  }

  interface FontStyles {
    h1: undefined;
    h2: undefined;
    h3: undefined;
    h4: undefined;
    h5: undefined;
    h6: undefined;
    h7: undefined;
    title: undefined;
    subtitle: undefined;
    button: undefined;
    link: undefined;
    body1: undefined;
    body2: undefined;
    helper: undefined;
    caption: undefined;
    overline: undefined;
    label: undefined;
  }
}

type FontFamilyType =
  | "Roboto-Black"
  | "Roboto-BlackItalic"
  | "Roboto-Bold"
  | "Roboto-BoldItalic"
  | "Roboto-Italic"
  | "Roboto-Light"
  | "Roboto-LightItalic"
  | "Roboto-Medium"
  | "Roboto-MediumItalic"
  | "Roboto-Regular"
  | "Roboto-Thin"
  | "Roboto-ThinItalic";

interface FontStyleType {
  fontFamily: FontFamilyType;
  fontSize: number;
  lineHeight?: number;
}

interface FontStylesType {
  h1: FontStyleType;
  h2: FontStyleType;
  h3: FontStyleType;
  h4: FontStyleType;
  h5: FontStyleType;
  h6: FontStyleType;
  h7: FontStyleType;
  title: FontStyleType;
  subtitle: FontStyleType;
  button: FontStyleType;
  link: FontStyleType;
  body1: FontStyleType;
  body2: FontStyleType;
  helper: FontStyleType;
  caption: FontStyleType;
  overline: FontStyleType;
  label: FontStyleType;
}

export const FONT_STYLES: FontStylesType = {
  h1: {
    fontFamily: "Roboto-Light",
    fontSize: 60,
  },
  h2: {
    fontFamily: "Roboto-Light",
    fontSize: 60,
  },
  h3: {
    fontFamily: "Roboto-Regular",
    fontSize: 48,
  },
  h4: {
    fontFamily: "Roboto-Regular",
    fontSize: 34,
  },
  h5: {
    fontFamily: "Roboto-Regular",
    fontSize: 24,
  },
  h6: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  h7: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
  },
  title: {
    fontFamily: "Roboto-Black",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  button: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  helper: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  caption: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  overline: {
    fontFamily: "Roboto-Bold",
    fontSize: 12,
  },
  label: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
};
