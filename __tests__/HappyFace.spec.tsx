import "react-native";
import React from "react";
import HappyFace from "../src/icons/HappyFace";

import renderer from "react-test-renderer";

describe("HappyFace", () => {
  it("renders correctly", () => {
    renderer.create(<HappyFace />);
  });
});
