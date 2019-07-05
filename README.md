# generator-polymer-3-ts-element

Jump-start a new Polymer 3 custom element using Typescript.

## Installation

You'll need a [yeoman](https://yeoman.io/) installation first.

```bash
npm install -g yo
```

Then install the generator.

```bash
npm install -g generator-polymer-3-ts-element
```

## Usage

> You do not need to create a new directory first.
To generate your new project:

```bash
yo polymer-3-ts-element
```

You'll be prompted for the name of your new component on running the generator.

## Project Structure

The generatror creates a project which allows you to import your html template and css from separate files.

Includes scripts `start` and `build` for testing and distribution respectivley.

```text
element-name
├── README.md
├── examples
│   └── index.html
├── index.html
├── package.json
├── src
│   ├── index.ts
│   ├── styles.css
│   ├── template.html
│   └── typings.d.ts
├── tsconfig.json
├── tslint.json
├── webpack.dvl.conf.js
└── webpack.prd.conf.js
```

## License

Apache-2.0 © Ben Goodman
