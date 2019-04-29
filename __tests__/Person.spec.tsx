import "react-native";
import React from "react";
import { Person } from "../src";

import renderer from "react-test-renderer";

describe("Person", () => {
  it("renders correctly", () => {
    renderer.create(<Person />);
  });
});
