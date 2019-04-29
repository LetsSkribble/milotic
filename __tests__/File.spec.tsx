import "react-native";
import React from "react";
import File from "../src/icons/File";

import renderer from "react-test-renderer";

describe("File", () => {
  it("renders correctly", () => {
    renderer.create(<File />);
  });
});
