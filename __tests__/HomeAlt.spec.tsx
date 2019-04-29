import "react-native";
import React from "react";
import HomeAlt from "../src/icons/HomeAlt";

import renderer from "react-test-renderer";

describe("HomeAlt", () => {
  it("renders correctly", () => {
    renderer.create(<HomeAlt />);
  });
});
