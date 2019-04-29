import "react-native";
import React from "react";
import { Vertical } from "../src";

import renderer from "react-test-renderer";

describe("Vertical", () => {
  it("renders correctly", () => {
    renderer.create(<Vertical />);
  });
});
