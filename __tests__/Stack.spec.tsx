import "react-native";
import React from "react";
import Stack from "../src/icons/Stack";

import renderer from "react-test-renderer";

describe("Stack", () => {
  it("renders correctly", () => {
    renderer.create(<Stack />);
  });
});
