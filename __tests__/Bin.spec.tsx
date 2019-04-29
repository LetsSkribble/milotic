import "react-native";
import React from "react";
import Bin from "../src/icons/Bin";

import renderer from "react-test-renderer";

describe("Bin", () => {
  it("renders correctly", () => {
    renderer.create(<Bin />);
  });
});
