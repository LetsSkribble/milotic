import "react-native";
import React from "react";
import Flag from "../src/icons/Flag";

import renderer from "react-test-renderer";

describe("Flag", () => {
  it("renders correctly", () => {
    renderer.create(<Flag />);
  });
});
