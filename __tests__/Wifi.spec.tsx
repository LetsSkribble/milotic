import "react-native";
import React from "react";
import { Wifi } from "../src";

import renderer from "react-test-renderer";

describe("Wifi", () => {
  it("renders correctly", () => {
    renderer.create(<Wifi />);
  });
});
