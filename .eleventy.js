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

        // Only run on index
        // if (outputPath !== '/') return content;

        // Get code blocks
        let codeBlocks = document.querySelectorAll('pre code');

        codeBlocks.forEach(block => {
            let code = block.innerHTML;
            let language = block.getAttribute('[data-language]');
            let prismLanguage =
                Prism.languages[language] || Prism.languages.autoit;

            let highlightedCode = Prism.highlight(
                unescape(code),
                prismLanguage
            );

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
