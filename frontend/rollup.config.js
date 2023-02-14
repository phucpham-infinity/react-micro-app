import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/root.tsx",
  output: {
    file: "../dist/app.js",
    format: "system",
    sourcemap: false,
  },
  external: ["react", "react-dom"],
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json", sourceMap: false }),
    postcss(),
    terser(),
    copy({
      targets: [{ src: "index.html", dest: "../dist/" }],
    }),
  ],
};
