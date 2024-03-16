import * as stylex from "@stylexjs/stylex";
import { container, tokens } from "../../tokens.stylex";

export const styles = stylex.create({
  topbg: {
    height: "240px",
    backgroundColor: tokens.primaryBackground,
  },
  img: {
    width: container.full,
    objectFit: "cover",
    height: container.full,
  },
});


