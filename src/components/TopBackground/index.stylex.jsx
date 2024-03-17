import stylex from "@stylexjs/stylex";
import { container, tokens } from "../../tokens.stylex";

const DESKTOP = "@media (min-width: 768px)";

export const styles = stylex.create({
  topbg: {
    height: { default: "240px", [DESKTOP]: "285px" },
    backgroundColor: tokens.primaryBackground,
  },
  img: {
    width: container.full,
    objectFit: "cover",
    height: container.full,
  },
});
