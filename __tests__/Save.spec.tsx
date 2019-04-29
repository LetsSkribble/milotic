import "react-native";
import React from "react";
import { Save } from "../src";

import renderer from "react-test-renderer";

describe("Save", () => {
  it("renders correctly", () => {
    renderer.create(<Save />);
  });
});
