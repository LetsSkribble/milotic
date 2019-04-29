import "react-native";
import React from "react";
import { Forward } from "../src";

import renderer from "react-test-renderer";

describe("Forward", () => {
  it("renders correctly", () => {
    renderer.create(<Forward />);
  });
});
