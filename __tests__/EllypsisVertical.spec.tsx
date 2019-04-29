import "react-native";
import React from "react";
import { EllypsisVertical } from "../src";

import renderer from "react-test-renderer";

describe("EllypsisVertical", () => {
  it("renders correctly", () => {
    renderer.create(<EllypsisVertical />);
  });
});
