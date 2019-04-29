import "react-native";
import React from "react";
import Search from "../src/icons/Search";

import renderer from "react-test-renderer";

describe("Search", () => {
  it("renders correctly", () => {
    renderer.create(<Search />);
  });
});
