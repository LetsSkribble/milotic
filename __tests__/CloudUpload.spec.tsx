import "react-native";
import React from "react";
import CloudUpload from "../src/icons/CloudUpload";

import renderer from "react-test-renderer";

describe("CloudUpload", () => {
  it("renders correctly", () => {
    renderer.create(<CloudUpload />);
  });
});
