import "react-native";
import React from "react";
import { Cut } from "../src";

import renderer from "react-test-renderer";

describe("Cut", () => {
  it("renders correctly", () => {
    renderer.create(<Cut />);
  });
});
