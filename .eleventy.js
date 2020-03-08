const jsdom = require('jsdom');
const Prism = require('node-prismjs');
const unescape = require('unescape');
const { JSDOM } = jsdom;

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('assets');

    // Transforms
    eleventyConfig.addTransform('syntaxHighlight', (content, outputPath) => {
        const dom = new JSDOM(content);
        const document = dom.window.document;

        // Get code blocks
        let codeBlocks = document.querySelectorAll('pre code');

        codeBlocks.forEach(block => {
            let code = block.innerHTML;
            let type = block.getAttribute('[data-type]');
            let language = Prism.languages[type] || Prism.languages.autoit;
            let highlightedCode = Prism.highlight(unescape(code), language);
            block.innerHTML = highlightedCode;
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
