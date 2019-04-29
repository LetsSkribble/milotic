import "react-native";
import React from "react";
import { Laptop } from "../src";

import renderer from "react-test-renderer";

describe("Laptop", () => {
  it("renders correctly", () => {
    renderer.create(<Laptop />);
  });
});
