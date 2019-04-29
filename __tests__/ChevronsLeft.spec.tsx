import "react-native";
import React from "react";
import ChevronsLeft from "../src/icons/ChevronsLeft";

import renderer from "react-test-renderer";

describe("ChevronsLeft", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronsLeft />);
  });
});
