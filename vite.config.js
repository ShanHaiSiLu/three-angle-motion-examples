import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "path";

function pathResolve(dir) {
  console.log(resolve(process.cwd(), ".", dir));
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  assetsInclude: ["**/*.html"],
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    base: "./",
  },
  build: {
    rollupOptions: {
      input: {
        main: pathResolve("index.html"),
        BezierPolyline3DDemo: pathResolve("src/BezierPolyline3D/index.html"),
        BezierPolyline3DDemo2: pathResolve("src/BezierPolyline3D/test.html"),
        DistenceLineDemo: pathResolve("src/DistenceLine/index.html"),
        PointerLockOrbitControlsDemo: pathResolve("src/PointerLockOrbitControls/index.html"),
        PointerLockOrbitControlsBasic: pathResolve("src/PointerLockOrbitControls/basic.html"),
      },
    },
  },
});
