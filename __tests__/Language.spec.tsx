import "react-native";
import React from "react";
import Language from "../src/icons/Language";

import renderer from "react-test-renderer";

describe("Language", () => {
  it("renders correctly", () => {
    renderer.create(<Language />);
  });
});
