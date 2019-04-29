import "react-native";
import React from "react";
import { Octagon } from "../src";

import renderer from "react-test-renderer";

describe("Octagon", () => {
  it("renders correctly", () => {
    renderer.create(<Octagon />);
  });
});
