import "react-native";
import React from "react";
import Edit from "../src/icons/Edit";

import renderer from "react-test-renderer";

describe("Edit", () => {
  it("renders correctly", () => {
    renderer.create(<Edit />);
  });
});
