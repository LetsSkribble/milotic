import "react-native";
import React from "react";
import { NotAllowed } from "../src";

import renderer from "react-test-renderer";

describe("NotAllowed", () => {
  it("renders correctly", () => {
    renderer.create(<NotAllowed />);
  });
});
