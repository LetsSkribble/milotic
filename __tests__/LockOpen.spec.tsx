import "react-native";
import React from "react";
import LockOpen from "../src/icons/LockOpen";

import renderer from "react-test-renderer";

describe("LockOpen", () => {
  it("renders correctly", () => {
    renderer.create(<LockOpen />);
  });
});
