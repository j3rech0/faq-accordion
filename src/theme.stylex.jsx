import stylex from "@stylexjs/stylex";
import { tokens } from "./tokens.stylex.jsx";

const colors = {
  white: tokens.white,
  lightPink: tokens.lightPink,
  darkPurple: tokens.darkPurple,
  grayishPurple: tokens.grayishPurple,
  purple: tokens.purple,

  // Dark
  black: tokens.black,
  darkPink: tokens.darkPink,
  lightPurple: tokens.lightPurple,
};

export const mytheme = stylex.createTheme(tokens, {
  primaryText: colors.darkPurple,
  secondaryText: colors.grayishPurple,
  primaryBackground: colors.lightPink,
  secondaryBackground: colors.white,
});
