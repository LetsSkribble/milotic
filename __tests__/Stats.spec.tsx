import "react-native";
import React from "react";
import Stats from "../src/icons/Stats";

import renderer from "react-test-renderer";

describe("Stats", () => {
  it("renders correctly", () => {
    renderer.create(<Stats />);
  });
});
