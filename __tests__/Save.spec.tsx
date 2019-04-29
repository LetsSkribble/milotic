import "react-native";
import React from "react";
import Save from "../src/icons/Save";

import renderer from "react-test-renderer";

describe("Save", () => {
  it("renders correctly", () => {
    renderer.create(<Save />);
  });
});
