import "react-native";
import React from "react";
import Power from "../src/icons/Power";

import renderer from "react-test-renderer";

describe("Power", () => {
  it("renders correctly", () => {
    renderer.create(<Power />);
  });
});
