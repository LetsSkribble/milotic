import "react-native";
import React from "react";
import Previous from "../src/icons/Previous";

import renderer from "react-test-renderer";

describe("Previous", () => {
  it("renders correctly", () => {
    renderer.create(<Previous />);
  });
});
