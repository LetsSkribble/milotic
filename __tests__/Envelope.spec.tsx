import "react-native";
import React from "react";
import { Envelope } from "../src";

import renderer from "react-test-renderer";

describe("Envelope", () => {
  it("renders correctly", () => {
    renderer.create(<Envelope />);
  });
});
