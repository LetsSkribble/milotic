import "react-native";
import React from "react";
import Chart from "../src/icons/Chart";

import renderer from "react-test-renderer";

describe("Chart", () => {
  it("renders correctly", () => {
    renderer.create(<Chart />);
  });
});
