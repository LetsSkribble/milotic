import "react-native";
import React from "react";
import { Ok } from "../src";

import renderer from "react-test-renderer";

describe("Ok", () => {
  it("renders correctly", () => {
    renderer.create(<Ok />);
  });
});
