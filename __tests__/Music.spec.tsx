import "react-native";
import React from "react";
import { Music } from "../src";

import renderer from "react-test-renderer";

describe("Music", () => {
  it("renders correctly", () => {
    renderer.create(<Music />);
  });
});
