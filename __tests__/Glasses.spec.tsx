import "react-native";
import React from "react";
import { Glasses } from "../src";

import renderer from "react-test-renderer";

describe("Glasses", () => {
  it("renders correctly", () => {
    renderer.create(<Glasses />);
  });
});
