import "react-native";
import React from "react";
import List from "../src/icons/List";

import renderer from "react-test-renderer";

describe("List", () => {
  it("renders correctly", () => {
    renderer.create(<List />);
  });
});
