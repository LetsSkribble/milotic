import "react-native";
import React from "react";
import { Cancel } from "../src";

import renderer from "react-test-renderer";

describe("Cancel", () => {
  it("renders correctly", () => {
    renderer.create(<Cancel />);
  });
});
