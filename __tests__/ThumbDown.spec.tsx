import "react-native";
import React from "react";
import { ThumbDown } from "../src";

import renderer from "react-test-renderer";

describe("ThumbDown", () => {
  it("renders correctly", () => {
    renderer.create(<ThumbDown />);
  });
});
