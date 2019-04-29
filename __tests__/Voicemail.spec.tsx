import "react-native";
import React from "react";
import { Voicemail } from "../src";

import renderer from "react-test-renderer";

describe("Voicemail", () => {
  it("renders correctly", () => {
    renderer.create(<Voicemail />);
  });
});
