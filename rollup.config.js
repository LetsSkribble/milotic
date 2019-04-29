import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import includePaths from "rollup-plugin-includepaths";
import typescript from "rollup-plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm"
  },
  // All the used libs needs to be here
  external: ["react", "react-native", "react-native-svg"],
  plugins: [
    typescript(),
    includePaths({
      include: {},
      external: [],
      extensions: [".ts", ".tsx"]
    }),
    resolve(),
    babel()
  ]
};
