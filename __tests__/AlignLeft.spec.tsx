import "react-native";
import React from "react";
import AlignLeft from "../src/icons/AlignLeft";

import renderer from "react-test-renderer";

describe("AlignLeft", () => {
  it("renders correctly", () => {
    renderer.create(<AlignLeft />);
  });
});
