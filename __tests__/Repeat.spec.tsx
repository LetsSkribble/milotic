import "react-native";
import React from "react";
import { Repeat } from "../src";

import renderer from "react-test-renderer";

describe("Repeat", () => {
  it("renders correctly", () => {
    renderer.create(<Repeat />);
  });
});
