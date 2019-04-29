import "react-native";
import React from "react";
import { Notebook } from "../src";

import renderer from "react-test-renderer";

describe("Notebook", () => {
  it("renders correctly", () => {
    renderer.create(<Notebook />);
  });
});
