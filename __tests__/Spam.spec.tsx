import "react-native";
import React from "react";
import { Spam } from "../src";

import renderer from "react-test-renderer";

describe("Spam", () => {
  it("renders correctly", () => {
    renderer.create(<Spam />);
  });
});
