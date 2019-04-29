import "react-native";
import React from "react";
import Bag from "../src/icons/Bag";

import renderer from "react-test-renderer";

describe("Bag", () => {
  it("renders correctly", () => {
    renderer.create(<Bag />);
  });
});
