import "react-native";
import React from "react";
import { Back } from "../src";

import renderer from "react-test-renderer";

describe("Back", () => {
  it("renders correctly", () => {
    renderer.create(<Back />);
  });
});
