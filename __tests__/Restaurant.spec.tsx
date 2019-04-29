import "react-native";
import React from "react";
import Restaurant from "../src/icons/Restaurant";

import renderer from "react-test-renderer";

describe("Restaurant", () => {
  it("renders correctly", () => {
    renderer.create(<Restaurant />);
  });
});
