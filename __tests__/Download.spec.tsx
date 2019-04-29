import "react-native";
import React from "react";
import Download from "../src/icons/Download";

import renderer from "react-test-renderer";

describe("Download", () => {
  it("renders correctly", () => {
    renderer.create(<Download />);
  });
});
