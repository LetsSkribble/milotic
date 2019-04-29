import "react-native";
import React from "react";
import { Tag } from "../src";

import renderer from "react-test-renderer";

describe("Tag", () => {
  it("renders correctly", () => {
    renderer.create(<Tag />);
  });
});
