// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import run from "@rollup/plugin-run";
import { uglify } from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";

const isDev = process.env.NODE_ENV !== "production";

export default {
  input: "src/server.ts",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: false,
  },
  plugins: [
    typescript(),
    uglify(),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    isDev && run(),
  ],
};
