import "react-native";
import React from "react";
import { Explore } from "../src";

import renderer from "react-test-renderer";

describe("Explore", () => {
  it("renders correctly", () => {
    renderer.create(<Explore />);
  });
});
