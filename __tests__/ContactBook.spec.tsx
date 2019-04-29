import "react-native";
import React from "react";
import { ContactBook } from "../src";

import renderer from "react-test-renderer";

describe("ContactBook", () => {
  it("renders correctly", () => {
    renderer.create(<ContactBook />);
  });
});
