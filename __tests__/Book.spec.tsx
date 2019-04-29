import "react-native";
import React from "react";
import { Book } from "../src";

import renderer from "react-test-renderer";

describe("Book", () => {
  it("renders correctly", () => {
    renderer.create(<Book />);
  });
});
