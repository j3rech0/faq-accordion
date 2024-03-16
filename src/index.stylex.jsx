import stylex from "@stylexjs/stylex";
import { mytheme } from "./theme.stylex.jsx";
import { spacing, tokens } from "./tokens.stylex.jsx";

const styles = stylex.create({
  root: {
    fontFamily: tokens.fontFamily,
    fontWeight: tokens.fontWeight,
    boxSizing: "border-box",
    fontSize: spacing["0"],
    backgroundColor: tokens.primaryBackground,
    padding: spacing.none,
  },
});

export default function Body(props) {
  return <body {...stylex.props(mytheme, styles.root)}>{props.children}</body>;
}
