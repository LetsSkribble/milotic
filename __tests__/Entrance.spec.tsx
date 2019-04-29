import "react-native";
import React from "react";
import { Entrance } from "../src";

import renderer from "react-test-renderer";

describe("Entrance", () => {
  it("renders correctly", () => {
    renderer.create(<Entrance />);
  });
});
