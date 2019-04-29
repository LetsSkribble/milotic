import "react-native";
import React from "react";
import { HappyFace } from "../src";

import renderer from "react-test-renderer";

describe("HappyFace", () => {
  it("renders correctly", () => {
    renderer.create(<HappyFace />);
  });
});
