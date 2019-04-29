import "react-native";
import React from "react";
import Shuffle from "../src/icons/Shuffle";

import renderer from "react-test-renderer";

describe("Shuffle", () => {
  it("renders correctly", () => {
    renderer.create(<Shuffle />);
  });
});
