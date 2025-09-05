import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPassthroughCopy("_in/assets");
	eleventyConfig.addPassthroughCopy("_in/media");
	eleventyConfig.addPassthroughCopy({
		"_in/patterns/**/*.js": "assets/js/patterns",
		"_in/patterns/**/*.css": "assets/css/patterns",
		"_in/patterns/**/*.data.json": "assets/json/patterns"
	});
	// eleventyConfig.addPassthroughCopy("_in/media");
	// eleventyConfig.addPassthroughCopy("_in/media");
	// eleventyConfig.addPassthroughCopy("_in/favicon.ico");
	// eleventyConfig.addPassthroughCopy("_in/favicon.svg");
}
export const config = {
	dir: {
		input: "_in",
		output: "_out",
		layouts: "_layouts",
	},
	htmlTemplateEngine: "njk",
	markdownTemplateEngine: "md",
};
