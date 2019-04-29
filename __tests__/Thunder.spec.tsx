import "react-native";
import React from "react";
import { Thunder } from "../src";

import renderer from "react-test-renderer";

describe("Thunder", () => {
  it("renders correctly", () => {
    renderer.create(<Thunder />);
  });
});
