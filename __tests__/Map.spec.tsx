import "react-native";
import React from "react";
import { Map } from "../src";

import renderer from "react-test-renderer";

describe("Map", () => {
  it("renders correctly", () => {
    renderer.create(<Map />);
  });
});
