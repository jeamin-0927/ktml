import esbuild from 'esbuild';
import fs from 'fs';

const getEntryPoints = (dir) => {
  const entryPoints = [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      entryPoints.push(...getEntryPoints(file));
    }
    if (stat.isFile()) {
      entryPoints.push(file);
    }
  });
  return entryPoints;
}

const entryPoints = getEntryPoints("src");

const baseConfig = {
  entryPoints,
  outdir: 'dist',
  bundle: true,
  // minify: true,
  sourcemap: true,
}

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
    platform: 'node',
    loader: {
      ".node": "file",
    },
  }),
  esbuild.build({
    ...baseConfig,
    format: 'esm',
    platform: 'node',
    loader: {
      ".node": "file",
    },
  }),
]).catch(() => {
  console.error('Build failed');
  process.exit(1);
});
