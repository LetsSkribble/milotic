import "react-native";
import React from "react";
import { Upload } from "../src";

import renderer from "react-test-renderer";

describe("Upload", () => {
  it("renders correctly", () => {
    renderer.create(<Upload />);
  });
});
