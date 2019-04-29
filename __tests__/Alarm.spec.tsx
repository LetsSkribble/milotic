import "react-native";
import React from "react";
import Alarm from "../src/icons/Alarm";

import renderer from "react-test-renderer";

describe("Alarm", () => {
  it("renders correctly", () => {
    renderer.create(<Alarm />);
  });
});
