import "react-native";
import React from "react";
import { Delete } from "../src";

import renderer from "react-test-renderer";

describe("Delete", () => {
  it("renders correctly", () => {
    renderer.create(<Delete />);
  });
});
