"use strict";
import Generator from "yeoman-generator";
import { blue } from "chalk";
import yosay from "yosay";
import validate from "validate-element-name";

import { getClassName, templateToDestTuples } from "../util";

export default class extends Generator {
  async prompting() {
    this.log(yosay(blue("New Polymer 3 Element")));

    const prompts = [
      {
        type: "input",
        name: "componentName",
        message: "Name of element:",
        validate: value => {
          const isValid = validate(value);
          if (!isValid.isValid) {
            return isValid.message;
          }
          return true;
        }
      },
      {
        type: "list",
        name: "packageManager",
        message: "Select package manager",
        choices: ["npm", "yarn"]
      }
    ];

    this.props = await this.prompt(prompts);
  }

  writing() {
    const templateOptions = {
      componentNameAsClass: getClassName(this.props.componentName),
      componentName: this.props.componentName
    };

    templateToDestTuples.forEach(pathTuple => {
      this.fs.copyTpl(
        this.templatePath(pathTuple[0]),
        this.destinationPath(
          `${this.props.componentName}/${
            pathTuple.length === 1 ? pathTuple[0] : pathTuple[1]
          }`
        ),
        templateOptions
      );
    });

    this.fs.readJSON(this.destinationPath("package.json"));
  }

  install() {
    let defaults = {
      npm: false,
      bower: false,
      yarn: false
    };
    defaults[this.props.packageManager] = true;
    this.installDependencies(defaults);
  }
}
