import "react-native";
import React from "react";
import Cursor from "../src/icons/Cursor";

import renderer from "react-test-renderer";

describe("Cursor", () => {
  it("renders correctly", () => {
    renderer.create(<Cursor />);
  });
});
