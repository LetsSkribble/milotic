import "react-native";
import React from "react";
import ChevronsDown from "../src/icons/ChevronsDown";

import renderer from "react-test-renderer";

describe("ChevronsDown", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronsDown />);
  });
});
