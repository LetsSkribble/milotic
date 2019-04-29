import "react-native";
import React from "react";
import { New } from "../src";

import renderer from "react-test-renderer";

describe("New", () => {
  it("renders correctly", () => {
    renderer.create(<New />);
  });
});
