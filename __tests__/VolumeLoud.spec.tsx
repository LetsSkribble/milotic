import "react-native";
import React from "react";
import VolumeLoud from "../src/icons/VolumeLoud";

import renderer from "react-test-renderer";

describe("VolumeLoud", () => {
  it("renders correctly", () => {
    renderer.create(<VolumeLoud />);
  });
});
