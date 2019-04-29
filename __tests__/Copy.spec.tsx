import "react-native";
import React from "react";
import { Copy } from "../src";

import renderer from "react-test-renderer";

describe("Copy", () => {
  it("renders correctly", () => {
    renderer.create(<Copy />);
  });
});
