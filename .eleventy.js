module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("models");
  eleventyConfig.addPassthroughCopy("view");
  eleventyConfig.addPassthroughCopy("controllers");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("data");
};
