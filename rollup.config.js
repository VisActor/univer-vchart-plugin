import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import { globSync } from "glob";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const external = [
  "react",
  "react-dom",
  "rxjs",
  /@univerjs\/.*/,
  "@visactor/react-vchart",
];

const inputs = Object.fromEntries(
  globSync("src/**/*.ts").map((file) => [
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url)),
  ])
);

export default [
  // esm
  {
    input: inputs,
    external: external,
    output: {
      dir: "esm",
      format: "es",
      sourcemap: true,
    },

    plugins: [
      resolve({
        browser: true,
        modulesOnly: true,
        customResolveOptions: { preserveSymlinks: false },
      }),
      commonjs(),
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "defaults and not IE 11",
            },
          ],
          [
            "@babel/preset-typescript",
            {
              allowDeclareFields: true,
            },
          ],
        ],
        babelHelpers: "bundled",
        extensions: [".js", ".ts", ".tsx"],
      }),

      typescript({
        tsconfig: path.resolve(__dirname, "./tsconfig.json"),
        target: "es6",
        downlevelIteration: false,
        declaration: true,
        declarationDir: "esm",
      }),
    ],
  },

  // cjs
  {
    input: inputs,
    external: external,
    output: {
      dir: "cjs",
      format: "cjs",
      exports: "auto",
      sourcemap: false,
    },
    plugins: [
      resolve({
        browser: false,
        modulesOnly: true,
        customResolveOptions: { preserveSymlinks: false },
      }),
      commonjs(),
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "defaults and not IE 11",
            },
          ],
          [
            "@babel/preset-typescript",
            {
              allowDeclareFields: true,
            },
          ],
        ],
        babelHelpers: "bundled",
        extensions: [".js", ".ts", ".tsx"],
      }),

      typescript({
        tsconfig: path.resolve(__dirname, "./tsconfig.json"),
        target: "es5",
        downlevelIteration: true,
        declaration: true,
        declarationDir: "cjs",
      }),
    ],
  },
];