import "react-native";
import React from "react";
import { Danger } from "../src";

import renderer from "react-test-renderer";

describe("Danger", () => {
  it("renders correctly", () => {
    renderer.create(<Danger />);
  });
});
