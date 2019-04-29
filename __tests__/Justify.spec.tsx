import "react-native";
import React from "react";
import Justify from "../src/icons/Justify";

import renderer from "react-test-renderer";

describe("Justify", () => {
  it("renders correctly", () => {
    renderer.create(<Justify />);
  });
});
