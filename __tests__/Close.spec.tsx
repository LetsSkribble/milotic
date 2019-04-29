import "react-native";
import React from "react";
import { Close } from "../src";

import renderer from "react-test-renderer";

describe("Close", () => {
  it("renders correctly", () => {
    renderer.create(<Close />);
  });
});
