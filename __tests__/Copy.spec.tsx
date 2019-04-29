import "react-native";
import React from "react";
import Copy from "../src/icons/Copy";

import renderer from "react-test-renderer";

describe("Copy", () => {
  it("renders correctly", () => {
    renderer.create(<Copy />);
  });
});
