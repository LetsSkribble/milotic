import "react-native";
import React from "react";
import Clipboard from "../src/icons/Clipboard";

import renderer from "react-test-renderer";

describe("Clipboard", () => {
  it("renders correctly", () => {
    renderer.create(<Clipboard />);
  });
});
