import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
	entry: {
		index: './src/index.ts',
	},
	outDir: 'dist',
	format: ['esm'],
	clean: true,
	sourcemap: true,
	minify: !options.watch,
	target: 'node14',
}))
