import "react-native";
import React from "react";
import SuitcaseAlt from "../src/icons/SuitcaseAlt";

import renderer from "react-test-renderer";

describe("SuitcaseAlt", () => {
  it("renders correctly", () => {
    renderer.create(<SuitcaseAlt />);
  });
});
