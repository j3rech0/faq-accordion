import stylex from "@stylexjs/stylex";

export const tokens = stylex.defineVars({
  none: "#0000",
  white: "hsl(0, 0%, 100%)",
  lightPink: "hsl(275, 100%, 97%)",
  darkPurple: "hsl(292, 42%, 14%)",
  grayishPurple: "hsl(292, 16%, 49%)",
  purple: "hsl(280.92deg, 82.98%, 53.92%)",
  fontFamily: "Work Sans, sans-serif",
  black: "hsl(0, 0%, 0%)",
  darkPink: "hsl(275, 5%, 7%)",
  lightPurple: "hsl(292deg, 100%, 71.81%)",
});

const size = {
  base: "16px",
  small: "10px",
  medium: "20px",
  large: "30px",
  xlarge: "40px",
  xmedium: "15px",
  xxmedium: "25px",
  xxlarge: "50px",
};

export const spacing = stylex.defineVars({
  none: "0px",
  0: size.base,
  1: size.small,
  2: size.medium,
  3: size.large,
  4: size.xlarge,
  5: size.xmedium,
  6: size.xxmedium,
  7: size.xxlarge,
});

export const container = stylex.defineVars({
  full: "100%",
  max: "460px",
});

export const radius = stylex.defineVars({
  radius1: size.xmedium,
});
