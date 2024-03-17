import stylex from "@stylexjs/stylex";
import { radius, tokens, container, spacing } from "../tokens.stylex.jsx";

const DESKTOP = "@media (min-width: 768px)";

export const styles = stylex.create({
  main: {
    width: container.full,
  },
  section: {
    marginInline: "auto",
    display: "grid",
    placeContent: "center",
  },
  starimg: {
    width: { default: spacing["3"], [DESKTOP]: spacing["4"] },
  },
  articlecontainer: {
    width: container.full,
  },
  content: {
    backgroundColor: tokens.secondaryBackground,
    borderRadius: radius.radius1,
    marginTop: -130,
    padding: spacing["2"],
    position: "relative",
    maxWidth: container.max,
    marginInline: spacing["2"],
    paddingBlock: spacing["4"],
    paddingInline: spacing["4"],
  },
  header: {
    width: "100%",
    marginBottom: spacing["4"],
  },
  h1: {
    color: tokens.primaryText,
    fontSize: { default: spacing["3"], [DESKTOP]: spacing["7"] },
    margin: spacing.none,
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
});
