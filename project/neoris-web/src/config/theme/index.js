import { generate } from "@ant-design/colors";
import media from "./media";
import variables from "./variables.json";

const theme = {
  media,
  ...variables,
  colors: {
    ...Object.keys(variables.colors).reduce((acc, color) => {
      acc[color] = variables.colors[color];
      acc[`${color}Palette`] = generate(variables.colors[color]);
      return acc;
    }, {}),
  },
};

export default theme;
