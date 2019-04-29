import "react-native";
import React from "react";
import { ListAlt } from "../src";

import renderer from "react-test-renderer";

describe("ListAlt", () => {
  it("renders correctly", () => {
    renderer.create(<ListAlt />);
  });
});
