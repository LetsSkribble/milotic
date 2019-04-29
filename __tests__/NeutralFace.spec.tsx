import "react-native";
import React from "react";
import { NeutralFace } from "../src";

import renderer from "react-test-renderer";

describe("NeutralFace", () => {
  it("renders correctly", () => {
    renderer.create(<NeutralFace />);
  });
});
