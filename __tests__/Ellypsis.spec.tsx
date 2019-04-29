import "react-native";
import React from "react";
import Ellypsis from "../src/icons/Ellypsis";

import renderer from "react-test-renderer";

describe("Ellypsis", () => {
  it("renders correctly", () => {
    renderer.create(<Ellypsis />);
  });
});
