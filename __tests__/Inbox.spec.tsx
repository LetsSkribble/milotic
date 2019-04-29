import "react-native";
import React from "react";
import { Inbox } from "../src";

import renderer from "react-test-renderer";

describe("Inbox", () => {
  it("renders correctly", () => {
    renderer.create(<Inbox />);
  });
});
