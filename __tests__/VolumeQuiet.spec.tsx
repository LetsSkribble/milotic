import "react-native";
import React from "react";
import { VolumeQuiet } from "../src";

import renderer from "react-test-renderer";

describe("VolumeQuiet", () => {
  it("renders correctly", () => {
    renderer.create(<VolumeQuiet />);
  });
});
