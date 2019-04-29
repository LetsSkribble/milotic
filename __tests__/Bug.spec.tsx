import "react-native";
import React from "react";
import Bug from "../src/icons/Bug";

import renderer from "react-test-renderer";

describe("Bug", () => {
  it("renders correctly", () => {
    renderer.create(<Bug />);
  });
});
