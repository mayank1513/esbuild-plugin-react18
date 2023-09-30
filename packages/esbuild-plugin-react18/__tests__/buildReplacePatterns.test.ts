import fs from "node:fs";
import path from "node:path";
import { describe, test, beforeAll } from "vitest";
import esbuild from "esbuild";
import react18Plugin from "../src";
import glob from "tiny-glob";

/**
 * buildReplacePatterns could be very helpful in removing unnecessary comments introduced while bundling from other libraries
 */
describe.concurrent("Test plugin with ignorePatterns -- without content pattern", async () => {
	const outDir = "build-replace-patterns";
	const exampleBuildDir = path.resolve(process.cwd(), "dist", outDir);
	try {
		fs.unlinkSync(path.resolve(exampleBuildDir));
	} catch {}
	beforeAll(async () => {
		await esbuild.build({
			format: "cjs",
			target: "es2019",
			sourcemap: false,
			bundle: true,
			minify: true,
			plugins: [
				react18Plugin({
					buildReplacePatterns: [
						{
							pathPattern: /constants/,
							replaceParams: [
								{ pattern: /aaa/, substitute: "3c3c3c" },
								{ pattern: /#555/, substitute: "#ccc" },
							],
						},
					],
				}),
			],
			entryPoints: await glob("../esbuild-plugin-react18-example/src/**/*.*"),
			publicPath: "https://my.domain/static/",
			external: ["react", "react-dom"],
			outdir: "./dist/" + outDir,
		});
	});

	test(`"use client"; directive should be present in client components`, ({ expect }) => {
		const text = fs.readFileSync(path.resolve(exampleBuildDir, "client", "index.js"), "utf-8");
		expect(/^"use client";\n/m.test(text)).toBe(true);
	});
	test(`"use client"; directive should not be present in server components`, ({ expect }) => {
		const text = fs.readFileSync(path.resolve(exampleBuildDir, "server", "index.js"), "utf-8");
		expect(/^"use client";\n/m.test(text)).toBe(false);
	});
	test(`defaultBgColor should be "#3c3c3c" and defaultColor should be "#ccc"`, ({ expect }) => {
		const text = fs.readFileSync(path.resolve(exampleBuildDir, "server", "constants.js"), "utf-8");
		expect(text.includes("3c3c3c")).toBe(true);
	});
});
