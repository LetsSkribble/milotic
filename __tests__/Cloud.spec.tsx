import "react-native";
import React from "react";
import Cloud from "../src/icons/Cloud";

import renderer from "react-test-renderer";

describe("Cloud", () => {
  it("renders correctly", () => {
    renderer.create(<Cloud />);
  });
});
