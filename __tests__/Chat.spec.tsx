import "react-native";
import React from "react";
import Chat from "../src/icons/Chat";

import renderer from "react-test-renderer";

describe("Chat", () => {
  it("renders correctly", () => {
    renderer.create(<Chat />);
  });
});
