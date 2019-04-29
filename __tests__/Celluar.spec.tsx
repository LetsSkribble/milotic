import "react-native";
import React from "react";
import Celluar from "../src/icons/Celluar";

import renderer from "react-test-renderer";

describe("Celluar", () => {
  it("renders correctly", () => {
    renderer.create(<Celluar />);
  });
});
