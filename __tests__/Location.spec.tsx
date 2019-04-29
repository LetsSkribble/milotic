import "react-native";
import React from "react";
import { Location } from "../src";

import renderer from "react-test-renderer";

describe("Location", () => {
  it("renders correctly", () => {
    renderer.create(<Location />);
  });
});
