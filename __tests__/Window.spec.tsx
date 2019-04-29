import "react-native";
import React from "react";
import { Window } from "../src";

import renderer from "react-test-renderer";

describe("Window", () => {
  it("renders correctly", () => {
    renderer.create(<Window />);
  });
});
