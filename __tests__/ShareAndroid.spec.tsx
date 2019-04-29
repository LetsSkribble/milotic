import "react-native";
import React from "react";
import { ShareAndroid } from "../src";

import renderer from "react-test-renderer";

describe("ShareAndroid", () => {
  it("renders correctly", () => {
    renderer.create(<ShareAndroid />);
  });
});
