import "react-native";
import React from "react";
import { User } from "../src";

import renderer from "react-test-renderer";

describe("User", () => {
  it("renders correctly", () => {
    renderer.create(<User />);
  });
});
