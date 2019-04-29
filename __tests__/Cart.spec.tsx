import "react-native";
import React from "react";
import Cart from "../src/icons/Cart";

import renderer from "react-test-renderer";

describe("Cart", () => {
  it("renders correctly", () => {
    renderer.create(<Cart />);
  });
});
