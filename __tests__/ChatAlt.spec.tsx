import "react-native";
import React from "react";
import { ChatAlt } from "../src";

import renderer from "react-test-renderer";

describe("ChatAlt", () => {
  it("renders correctly", () => {
    renderer.create(<ChatAlt />);
  });
});
