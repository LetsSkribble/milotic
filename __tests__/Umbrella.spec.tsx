import "react-native";
import React from "react";
import { Umbrella } from "../src";

import renderer from "react-test-renderer";

describe("Umbrella", () => {
  it("renders correctly", () => {
    renderer.create(<Umbrella />);
  });
});
