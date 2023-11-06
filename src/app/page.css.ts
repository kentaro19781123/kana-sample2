import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/_styles/styles.css";

export const main = style(
  pcStyle({
    paddingTop: "16px",
  })
);

export const cssStyle = {
  main,
};
