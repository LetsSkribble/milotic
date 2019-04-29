import "react-native";
import React from "react";
import { Dolar } from "../src";

import renderer from "react-test-renderer";

describe("Dolar", () => {
  it("renders correctly", () => {
    renderer.create(<Dolar />);
  });
});
