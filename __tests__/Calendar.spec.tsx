import "react-native";
import React from "react";
import { Calendar } from "../src";

import renderer from "react-test-renderer";

describe("Calendar", () => {
  it("renders correctly", () => {
    renderer.create(<Calendar />);
  });
});
