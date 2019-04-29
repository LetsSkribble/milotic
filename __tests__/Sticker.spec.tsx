import "react-native";
import React from "react";
import { Sticker } from "../src";

import renderer from "react-test-renderer";

describe("Sticker", () => {
  it("renders correctly", () => {
    renderer.create(<Sticker />);
  });
});
