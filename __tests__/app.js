/* eslint-disable prettier/prettier */
"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test/lib");
const util = require("../util");

describe("generator-polymer-3-ts-element", () => {
  it("creates files", () => {
    return helpers
      .run(path.join(__dirname, "../index.js"))
      .withPrompts({ componentName: "test-element", packageManager: "yarn" })
      .then( () => {
        const paths = util.templateToDestTuples.map(tuple => {
          return path.join( __dirname, "../templates", tuple[0]);
        });
        assert.file(paths);
      })
  });

  it("rejects invalid element names", () => {
    return helpers
    .run(path.join(__dirname, "../index.js"))
    .withPrompts({ componentName: "InvalidComponent", packageManager: "yarn" })
    .then( () => {
      assert.rejects()
    })
  });
});

