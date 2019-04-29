import "react-native";
import React from "react";
import { ArrowLeftTop } from "../src";

import renderer from "react-test-renderer";

describe("ArrowLeftTop", () => {
  it("renders correctly", () => {
    renderer.create(<ArrowLeftTop />);
  });
});
