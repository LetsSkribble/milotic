import "react-native";
import React from "react";
import Filter from "../src/icons/Filter";

import renderer from "react-test-renderer";

describe("Filter", () => {
  it("renders correctly", () => {
    renderer.create(<Filter />);
  });
});
