import "react-native";
import React from "react";
import { Previous } from "../src";

import renderer from "react-test-renderer";

describe("Previous", () => {
  it("renders correctly", () => {
    renderer.create(<Previous />);
  });
});
