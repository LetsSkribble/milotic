import "react-native";
import React from "react";
import { NoEntry } from "../src";

import renderer from "react-test-renderer";

describe("NoEntry", () => {
  it("renders correctly", () => {
    renderer.create(<NoEntry />);
  });
});
