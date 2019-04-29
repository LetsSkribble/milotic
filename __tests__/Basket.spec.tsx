import "react-native";
import React from "react";
import { Basket } from "../src";

import renderer from "react-test-renderer";

describe("Basket", () => {
  it("renders correctly", () => {
    renderer.create(<Basket />);
  });
});
