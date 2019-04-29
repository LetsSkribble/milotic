import "react-native";
import React from "react";
import BackLeft from "../src/icons/BackLeft";

import renderer from "react-test-renderer";

describe("BackLeft", () => {
  it("renders correctly", () => {
    renderer.create(<BackLeft />);
  });
});
