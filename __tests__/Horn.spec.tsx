import "react-native";
import React from "react";
import { Horn } from "../src";

import renderer from "react-test-renderer";

describe("Horn", () => {
  it("renders correctly", () => {
    renderer.create(<Horn />);
  });
});
