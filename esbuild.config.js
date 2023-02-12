const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/server.js"],
    bundle: true,
    minify: true,
    outfile: "dist/server.js",
    platform: "node",
  })
  .catch((err) => {
    console.log("err", err);
    process.exit(1);
  });
