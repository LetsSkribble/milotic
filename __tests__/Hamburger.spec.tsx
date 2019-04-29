import "react-native";
import React from "react";
import { Hamburger } from "../src";

import renderer from "react-test-renderer";

describe("Hamburger", () => {
  it("renders correctly", () => {
    renderer.create(<Hamburger />);
  });
});
