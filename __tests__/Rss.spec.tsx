import "react-native";
import React from "react";
import { Rss } from "../src";

import renderer from "react-test-renderer";

describe("Rss", () => {
  it("renders correctly", () => {
    renderer.create(<Rss />);
  });
});
