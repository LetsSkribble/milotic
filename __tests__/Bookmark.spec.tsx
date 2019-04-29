import "react-native";
import React from "react";
import { Bookmark } from "../src";

import renderer from "react-test-renderer";

describe("Bookmark", () => {
  it("renders correctly", () => {
    renderer.create(<Bookmark />);
  });
});
