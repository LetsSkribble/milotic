import "react-native";
import React from "react";
import { ChevronsRight } from "../src";

import renderer from "react-test-renderer";

describe("ChevronsRight", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronsRight />);
  });
});
