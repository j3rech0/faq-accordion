import stylex from "@stylexjs/stylex";
import { tokens } from "./tokens.stylex.jsx";

const COLORSCHEME = "@media (prefers-color-scheme: light)";

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
  primaryText: { default: colors.darkPurple, [COLORSCHEME]: colors.lightPurple },
  secondaryText: colors.grayishPurple,
  primaryBackground: { default: colors.lightPink, [COLORSCHEME]: colors.darkPink },
  secondaryBackground: { default: colors.white, [COLORSCHEME]: colors.black },
});
