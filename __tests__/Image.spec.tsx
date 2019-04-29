import "react-native";
import React from "react";
import Image from "../src/icons/Image";

import renderer from "react-test-renderer";

describe("Image", () => {
  it("renders correctly", () => {
    renderer.create(<Image />);
  });
});
