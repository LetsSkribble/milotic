import "react-native";
import React from "react";
import { Watch } from "../src";

import renderer from "react-test-renderer";

describe("Watch", () => {
  it("renders correctly", () => {
    renderer.create(<Watch />);
  });
});
