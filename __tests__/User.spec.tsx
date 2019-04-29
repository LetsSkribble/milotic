import "react-native";
import React from "react";
import User from "../src/icons/User";

import renderer from "react-test-renderer";

describe("User", () => {
  it("renders correctly", () => {
    renderer.create(<User />);
  });
});
