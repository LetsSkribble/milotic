import "react-native";
import React from "react";
import Disc from "../src/icons/Disc";

import renderer from "react-test-renderer";

describe("Disc", () => {
  it("renders correctly", () => {
    renderer.create(<Disc />);
  });
});
