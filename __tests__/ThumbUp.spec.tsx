import "react-native";
import React from "react";
import ThumbUp from "../src/icons/ThumbUp";

import renderer from "react-test-renderer";

describe("ThumbUp", () => {
  it("renders correctly", () => {
    renderer.create(<ThumbUp />);
  });
});
