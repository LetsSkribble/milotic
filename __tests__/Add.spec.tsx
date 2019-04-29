import "react-native";
import React from "react";
import Add from "../src/icons/Add";

import renderer from "react-test-renderer";

describe("Add", () => {
  it("renders correctly", () => {
    renderer.create(<Add />);
  });
});
