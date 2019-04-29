import "react-native";
import React from "react";
import { Play } from "../src";

import renderer from "react-test-renderer";

describe("Play", () => {
  it("renders correctly", () => {
    renderer.create(<Play />);
  });
});
