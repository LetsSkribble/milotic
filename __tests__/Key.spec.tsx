import "react-native";
import React from "react";
import Key from "../src/icons/Key";

import renderer from "react-test-renderer";

describe("Key", () => {
  it("renders correctly", () => {
    renderer.create(<Key />);
  });
});
