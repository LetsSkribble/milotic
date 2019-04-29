import "react-native";
import React from "react";
import LockAlt from "../src/icons/LockAlt";

import renderer from "react-test-renderer";

describe("LockAlt", () => {
  it("renders correctly", () => {
    renderer.create(<LockAlt />);
  });
});
