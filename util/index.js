/* eslint-disable prettier/prettier */
/**
 * Transform a kebab-case custom element tag name into a PascalCase class name.
 * @param {string} componentName Tag name of custom component
 * @returns {string} Tag name as PascalCase
 */
const getClassName = (componentName) => {
    return componentName.toLowerCase().split("-").map( (str) => {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
    }).join("")
};

/**
 * Map template file to intended file.
 * @example "package.json.template" becommes "package.json"
 * @example "index.html" stays as "index.html" if only one value is given.
 */
const templateToDestTuples = [
    [".gitignore"],
    ["index.html"],
    ["package.json.template", "package.json"],
    ["README.md"],
    ["tsconfig.json"],
    ["webpack.dvl.conf.template", "webpack.dvl.conf.js"],
    ["webpack.prd.conf.template", "webpack.prd.conf.js"],
    ["src/index.template", "src/index.ts"],
    ["src/styles.css"],
    ["src/template.html"],
    ["src/typings.d.ts"]
];

module.exports = {
    getClassName, templateToDestTuples
}