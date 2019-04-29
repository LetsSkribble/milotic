import "react-native";
import React from "react";
import { Download } from "../src";

import renderer from "react-test-renderer";

describe("Download", () => {
  it("renders correctly", () => {
    renderer.create(<Download />);
  });
});
