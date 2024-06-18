import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import { globSync } from "glob";
import { fileURLToPath } from "node:url";

const external = [
  "react",
  "react-dom",
  "@univerjs/core",
  "@univerjs/ui",
  "@univerjs/sheets-drawing-ui",
  "@visactor/react-vchart",
  "@wendellhu/redi",
];

const inputs = Object.fromEntries(
  globSync("src/**/*.ts").map((file) => [
    // 这里将删除 `src/` 以及每个文件的扩展名。
    // 因此，例如 src/nested/foo.js 会变成 nested/foo
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // 这里可以将相对路径扩展为绝对路径，例如
    // src/nested/foo 会变成 /project/src/nested/foo.js
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
      }), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
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
        extensions: [".js", ".ts"],
      }),

      typescript({
        tsconfig: path.resolve(__dirname, "./tsconfig.json"),
        target: "es5",
        downlevelIteration: true,
        declaration: true,
        declarationDir: "esm",
      }),
    ],
  },

  //cjs

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
      }), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
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
        extensions: [".js", ".ts"],
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
