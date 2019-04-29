import "react-native";
import React from "react";
import { Drop } from "../src";

import renderer from "react-test-renderer";

describe("Drop", () => {
  it("renders correctly", () => {
    renderer.create(<Drop />);
  });
});
