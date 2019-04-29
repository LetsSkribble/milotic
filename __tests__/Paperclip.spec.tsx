import "react-native";
import React from "react";
import { Paperclip } from "../src";

import renderer from "react-test-renderer";

describe("Paperclip", () => {
  it("renders correctly", () => {
    renderer.create(<Paperclip />);
  });
});
