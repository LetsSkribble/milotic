import "react-native";
import React from "react";
import Video from "../src/icons/Video";

import renderer from "react-test-renderer";

describe("Video", () => {
  it("renders correctly", () => {
    renderer.create(<Video />);
  });
});
