import "react-native";
import React from "react";
import Cards from "../src/icons/Cards";

import renderer from "react-test-renderer";

describe("Cards", () => {
  it("renders correctly", () => {
    renderer.create(<Cards />);
  });
});
