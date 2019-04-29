import "react-native";
import React from "react";
import { Aperture } from "../src";

import renderer from "react-test-renderer";

describe("Aperture", () => {
  it("renders correctly", () => {
    renderer.create(<Aperture />);
  });
});
