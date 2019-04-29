import "react-native";
import React from "react";
import { SadFace } from "../src";

import renderer from "react-test-renderer";

describe("SadFace", () => {
  it("renders correctly", () => {
    renderer.create(<SadFace />);
  });
});
