import "react-native";
import React from "react";
import { Remove } from "../src";

import renderer from "react-test-renderer";

describe("Remove", () => {
  it("renders correctly", () => {
    renderer.create(<Remove />);
  });
});
