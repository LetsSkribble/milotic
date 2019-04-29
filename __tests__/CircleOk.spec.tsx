import "react-native";
import React from "react";
import CircleOk from "../src/icons/CircleOk";

import renderer from "react-test-renderer";

describe("CircleOk", () => {
  it("renders correctly", () => {
    renderer.create(<CircleOk />);
  });
});
