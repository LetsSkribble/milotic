import "react-native";
import React from "react";
import { Placeholder } from "../src";

import renderer from "react-test-renderer";

describe("Placeholder", () => {
  it("renders correctly", () => {
    renderer.create(<Placeholder />);
  });
});
