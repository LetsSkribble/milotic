import "react-native";
import React from "react";
import { Search } from "../src";

import renderer from "react-test-renderer";

describe("Search", () => {
  it("renders correctly", () => {
    renderer.create(<Search />);
  });
});
