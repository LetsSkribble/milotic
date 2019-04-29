import "react-native";
import React from "react";
import CircleArrowRight from "../src/icons/CircleArrowRight";

import renderer from "react-test-renderer";

describe("CircleArrowRight", () => {
  it("renders correctly", () => {
    renderer.create(<CircleArrowRight />);
  });
});
