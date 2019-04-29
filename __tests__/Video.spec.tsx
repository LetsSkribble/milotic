import "react-native";
import React from "react";
import { Video } from "../src";

import renderer from "react-test-renderer";

describe("Video", () => {
  it("renders correctly", () => {
    renderer.create(<Video />);
  });
});
