import "react-native";
import React from "react";
import Folder from "../src/icons/Folder";

import renderer from "react-test-renderer";

describe("Folder", () => {
  it("renders correctly", () => {
    renderer.create(<Folder />);
  });
});
