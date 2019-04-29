import "react-native";
import React from "react";
import { Favourite } from "../src";

import renderer from "react-test-renderer";

describe("Favourite", () => {
  it("renders correctly", () => {
    renderer.create(<Favourite />);
  });
});
