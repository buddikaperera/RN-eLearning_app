import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
      // base colors
      primary: "#5390ff", // Blue
      secondary: "#cacfd9", // Gray

      // colors
      black: "#1E1F20",
      white: "#FFFFFF",
      lightGray: "#eff2f5",
      gray: "#8b9097",
};
export const SIZES = {
      // global sizes
      base: 8,
      font: 14,
      radius: 12,
      padding: 24,
      padding2: 10,
      paddingH: 20,

      // font sizes
      largeTitle: 50,
      tinyTitle: 25,
      h1: 30,
      h2: 22,
      h3: 16,
      h4: 14,
      h5: 32,
      h6: 36,
      body1: 30,
      body2: 22,
      body3: 16,
      body4: 14,
      body5: 18,

      // app dimensions
      width,
      height,
};
export const FONTS = {
      largeTitle: {
            fontFamily: "Montserrat-Medium",
            fontSize: SIZES.largeTitle,
            lineHeight: 55,
      },

      Title: {
            fontFamily: "Montserrat-Medium",
            fontSize: SIZES.tinyTitle,
            lineHeight: 35,
      },
      h1: {
            fontFamily: "Montserrat-ExtraBold",
            fontSize: SIZES.h1,
            lineHeight: 36,
      },
      h2: {
            fontFamily: "Montserrat-ExtraBold",
            fontSize: SIZES.h2,
            lineHeight: 30,
      },
      h3: {
            fontFamily: "Montserrat-ExtraBold",
            fontSize: SIZES.h3,
            lineHeight: 22,
      },
      h4: {
            fontFamily: "Montserrat-ExtraBold",
            fontSize: SIZES.h4,
            lineHeight: 22,
      },
      h5: {
            fontFamily: "Montserrat-ExtraBold",
            fontSize: SIZES.h5,
            lineHeight: 32,
      },
      h6: {
            fontFamily: "Montserrat-ExtraBold",
            fontSize: SIZES.h6,
            lineHeight: 36,
      },
      body1: {
            fontFamily: "Montserrat-Regular",
            fontSize: SIZES.body1,
            lineHeight: 36,
      },
      body2: {
            fontFamily: "Montserrat-Regular",
            fontSize: SIZES.body2,
            lineHeight: 30,
      },
      body3: {
            fontFamily: "Montserrat-Regular",
            fontSize: SIZES.body3,
            lineHeight: 22,
      },
      body4: {
            fontFamily: "Montserrat-Regular",
            fontSize: SIZES.body4,
            lineHeight: 22,
      },
      body5: {
            fontFamily: "Montserrat-Light",
            fontSize: SIZES.body5,
            lineHeight: 18,
      },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
