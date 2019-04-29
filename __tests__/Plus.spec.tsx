import "react-native";
import React from "react";
import Plus from "../src/icons/Plus";

import renderer from "react-test-renderer";

describe("Plus", () => {
  it("renders correctly", () => {
    renderer.create(<Plus />);
  });
});
