const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('assets');

    // Configure Markdown
    let md = require('markdown-it');
    let mdPrism = require('markdown-it-prism');
    let options = { html: true };
    eleventyConfig.setLibrary('md', md(options).use(mdPrism));

    // Transforms
    eleventyConfig.addTransform('transformHeadings', (content, outputPath) => {
        const dom = new JSDOM(content);

        // Find all headings
        let headings = dom.window.document.querySelectorAll('h2, h3');
        headings.forEach(heading => {
            heading.classList.add('flow-space-8');
        });

        return dom.serialize();
    });

    return {
        dir: {
            input: 'templates',
            layouts: '_layouts'
        }
    };
};
