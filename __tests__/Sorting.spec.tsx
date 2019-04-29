import "react-native";
import React from "react";
import { Sorting } from "../src";

import renderer from "react-test-renderer";

describe("Sorting", () => {
  it("renders correctly", () => {
    renderer.create(<Sorting />);
  });
});
