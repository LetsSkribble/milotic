import "react-native";
import React from "react";
import { Time } from "../src";

import renderer from "react-test-renderer";

describe("Time", () => {
  it("renders correctly", () => {
    renderer.create(<Time />);
  });
});
