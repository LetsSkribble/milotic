import "react-native";
import React from "react";
import { Film } from "../src";

import renderer from "react-test-renderer";

describe("Film", () => {
  it("renders correctly", () => {
    renderer.create(<Film />);
  });
});
