import stylex from "@stylexjs/stylex";
import { container, spacing, tokens } from "../../tokens.stylex";

const scaleIn = stylex.keyframes({
  from: { opacity: 0, scale: "1 0", maxHeight: 0 },
  to: { opacity: 1, scale: "1 1", maxHeight: "500px" },
});

const styles = stylex.create({
  article: {
    ":not(:last-child)": {
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: tokens.primaryBackground,
    },
  },
  paragraph: {
    color: tokens.secondaryText,
    lineHeight: 1.6,
    transition: "200ms",
    opacity: 0,
    height: 0,
    margin: 0,
    ":is([data-state='true'])": {
      opacity: 1,
      paddingBottom: spacing["2"],
      animationName: scaleIn,
      animationDuration: "500ms",
      height: container.full,
    },
    ":is([data-state='false'])": {
      height: 0,
      margin: 0,
    },
  },
  headingh3: {
    display: "flex",
    position: "relative",
    width: "calc(100% - 40px)",
    zIndex: spacing.none,
    paddingRight: spacing["4"],
    color: tokens.primaryText,
    fontSize: spacing["0"],
    marginBottom: spacing["5"],
  },
});

export default function Article(props) {
  return <article {...props} {...stylex.props([styles.article])}></article>;
}

export const H3 = (props) => {
  return <h3 {...props} {...stylex.props(styles.headingh3)} />;
};

export const Paragraph = (props) => {
  return (
    <p {...props} {...stylex.props([styles.paragraph])}>
      {props.children}
    </p>
  );
};
