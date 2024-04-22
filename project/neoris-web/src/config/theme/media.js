import { css } from "styled-components";

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${breakpoints[label] / 16}em) {
        ${css(...args)};
      }
    `;

  return acc;
}, {});

export { breakpoints };
export default media;
