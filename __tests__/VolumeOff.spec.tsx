import "react-native";
import React from "react";
import VolumeOff from "../src/icons/VolumeOff";

import renderer from "react-test-renderer";

describe("VolumeOff", () => {
  it("renders correctly", () => {
    renderer.create(<VolumeOff />);
  });
});
