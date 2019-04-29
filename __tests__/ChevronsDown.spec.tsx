import "react-native";
import React from "react";
import { ChevronsDown } from "../src";

import renderer from "react-test-renderer";

describe("ChevronsDown", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronsDown />);
  });
});
