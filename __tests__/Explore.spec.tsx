import "react-native";
import React from "react";
import Explore from "../src/icons/Explore";

import renderer from "react-test-renderer";

describe("Explore", () => {
  it("renders correctly", () => {
    renderer.create(<Explore />);
  });
});
