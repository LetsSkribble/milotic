import "react-native";
import React from "react";
import LockAltOpen from "../src/icons/LockAltOpen";

import renderer from "react-test-renderer";

describe("LockAltOpen", () => {
  it("renders correctly", () => {
    renderer.create(<LockAltOpen />);
  });
});
