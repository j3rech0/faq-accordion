import stylex from "@stylexjs/stylex";
import { spacing, tokens } from "../../tokens.stylex";

const styles = stylex.create({
  button: {
    color: tokens.none,
    padding: spacing['1'],
    cursor: "pointer",
    width: "100%",
    zIndex: 2,
    background: tokens.none,
    position: "absolute",
    right: spacing['3'],
    border: tokens.none,
    ":hover::before": {
      backgroundColor: tokens.primaryText,
    },
    ":before": {
      content: "",
      maskImage: "var(--iconMinusSrc)",
      backgroundColor: tokens.purple,
      position: "absolute",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      top: -4,
      right: -30,
      width: spacing['3'],
      height: spacing['3'],
    },
    ":is([aria-expanded=true])::before": {
      maskImage: "var(--iconPlusSrc)",
      backgroundColor: tokens.primaryText,
    },
    ":is([aria-expanded=false])::before": {
      maskImage: "var(--iconMinusSrc)",
      backgroundColor: tokens.purple,
    },
  },
});

export default function Buttons(props) {
  return <button {...props} {...stylex.props(styles.button)} />;
}
