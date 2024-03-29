import typescript from "rollup-plugin-typescript2";
console.log(process.argv[4]);

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: './src/index.ts',
    output: {
      file: './lib/index.js',
      format: "esm",
    },
    plugins: [typescript()],
  },
];