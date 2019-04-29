import "react-native";
import React from "react";
import { ChevronsUp } from "../src";

import renderer from "react-test-renderer";

describe("ChevronsUp", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronsUp />);
  });
});
