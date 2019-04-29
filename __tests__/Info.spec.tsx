import "react-native";
import React from "react";
import Info from "../src/icons/Info";

import renderer from "react-test-renderer";

describe("Info", () => {
  it("renders correctly", () => {
    renderer.create(<Info />);
  });
});
