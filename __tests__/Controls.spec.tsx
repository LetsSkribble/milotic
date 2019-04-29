import "react-native";
import React from "react";
import Controls from "../src/icons/Controls";

import renderer from "react-test-renderer";

describe("Controls", () => {
  it("renders correctly", () => {
    renderer.create(<Controls />);
  });
});
