import "react-native";
import React from "react";
import { AlignRight } from "../src";

import renderer from "react-test-renderer";

describe("AlignRight", () => {
  it("renders correctly", () => {
    renderer.create(<AlignRight />);
  });
});
