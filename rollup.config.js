// See also: https://rollupjs.org/

const banner = `/**
 * This is a p5.js sketch made with p5-ts-template.
 *
 * @license CC0-1.0
 */
`;

const config = {
  input: "out/main.js",
  output: {
    file: "dist/main.js",
    format: "iife",
    banner,
    globals: {
      p5: "p5",
    },
    interop: "default",
  },
  external: ["p5"],
};

export default config;
