import esbuild from 'esbuild';

const baseConfig = {
	entryPoints: ['src/index.ts'],
	outdir: 'dist',
	bundle: true,
	minify: true,
	sourcemap: true,
}

Promise.all([
	esbuild.build({
		...baseConfig,
		format: 'cjs',
		outExtension: { '.js': '.cjs' },
	}),
	esbuild.build({
		...baseConfig,
		format: 'esm',
	}),
]).catch(() => {
	console.error('Build failed');
	process.exit(1);
});
