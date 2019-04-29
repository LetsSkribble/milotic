import "react-native";
import React from "react";
import Danger from "../src/icons/Danger";

import renderer from "react-test-renderer";

describe("Danger", () => {
  it("renders correctly", () => {
    renderer.create(<Danger />);
  });
});
