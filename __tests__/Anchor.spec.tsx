import "react-native";
import React from "react";
import Anchor from "../src/icons/Anchor";

import renderer from "react-test-renderer";

describe("Anchor", () => {
  it("renders correctly", () => {
    renderer.create(<Anchor />);
  });
});
