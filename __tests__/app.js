/* eslint-disable prettier/prettier */
"use strict";
const path = require("path");
const assert = require("../node_modules/yeoman-assert");
const helpers = require("../node_modules/yeoman-test/lib");
const util = require("../generators/util");

describe("generator-polymer-3-ts-element:app", () => {
  it("creates files", () => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ componentName: "test-element", packageManager: "yarn" })
      .then( () => {
        assert.file(util.templateToDestTuples.map(tuple => {
          return tuple[0];
        }));
      })
  });

  it("rejects invalid element names", () => {
    return helpers
    .run(path.join(__dirname, "../generators/app"))
    .withPrompts({ componentName: "InvalidComponent", packageManager: "yarn" })
    .then( () => {
      assert.rejects()
    })
  });
});

