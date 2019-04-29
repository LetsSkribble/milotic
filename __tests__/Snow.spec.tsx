import "react-native";
import React from "react";
import { Snow } from "../src";

import renderer from "react-test-renderer";

describe("Snow", () => {
  it("renders correctly", () => {
    renderer.create(<Snow />);
  });
});
