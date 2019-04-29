import "react-native";
import React from "react";
import { Chat } from "../src";

import renderer from "react-test-renderer";

describe("Chat", () => {
  it("renders correctly", () => {
    renderer.create(<Chat />);
  });
});
