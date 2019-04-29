import "react-native";
import React from "react";
import { CameraRear } from "../src";

import renderer from "react-test-renderer";

describe("CameraRear", () => {
  it("renders correctly", () => {
    renderer.create(<CameraRear />);
  });
});
