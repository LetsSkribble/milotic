import "react-native";
import React from "react";
import NeutralFace from "../src/icons/NeutralFace";

import renderer from "react-test-renderer";

describe("NeutralFace", () => {
  it("renders correctly", () => {
    renderer.create(<NeutralFace />);
  });
});
