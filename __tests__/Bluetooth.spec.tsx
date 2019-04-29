import "react-native";
import React from "react";
import { Bluetooth } from "../src";

import renderer from "react-test-renderer";

describe("Bluetooth", () => {
  it("renders correctly", () => {
    renderer.create(<Bluetooth />);
  });
});
