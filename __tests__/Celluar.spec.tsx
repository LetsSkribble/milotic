import "react-native";
import React from "react";
import { Celluar } from "../src";

import renderer from "react-test-renderer";

describe("Celluar", () => {
  it("renders correctly", () => {
    renderer.create(<Celluar />);
  });
});
