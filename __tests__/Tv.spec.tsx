import "react-native";
import React from "react";
import { Tv } from "../src";

import renderer from "react-test-renderer";

describe("Tv", () => {
  it("renders correctly", () => {
    renderer.create(<Tv />);
  });
});
