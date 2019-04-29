import "react-native";
import React from "react";
import { Restaurant } from "../src";

import renderer from "react-test-renderer";

describe("Restaurant", () => {
  it("renders correctly", () => {
    renderer.create(<Restaurant />);
  });
});
