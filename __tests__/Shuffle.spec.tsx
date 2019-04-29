import "react-native";
import React from "react";
import { Shuffle } from "../src";

import renderer from "react-test-renderer";

describe("Shuffle", () => {
  it("renders correctly", () => {
    renderer.create(<Shuffle />);
  });
});
