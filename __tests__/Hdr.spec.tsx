import "react-native";
import React from "react";
import Hdr from "../src/icons/Hdr";

import renderer from "react-test-renderer";

describe("Hdr", () => {
  it("renders correctly", () => {
    renderer.create(<Hdr />);
  });
});
