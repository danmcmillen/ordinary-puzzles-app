import { Platform } from "react-native";

export const fonts = {
  primary: {
    regular: { fontFamily: "OpenSans" },
    semibold: { fontFamily: "OpenSans-Semibold" },
    bold: { fontFamily: "OpenSans-Bold" }
  },
  secondary: {
    semibold: {
      fontFamily: Platform.OS === "android" ? "Inter-SemiBold" : undefined,
      fontWeight: "600"
    },
    bold: {},
    regular: {}
  }
};
