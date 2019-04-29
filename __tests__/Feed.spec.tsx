import "react-native";
import React from "react";
import { Feed } from "../src";

import renderer from "react-test-renderer";

describe("Feed", () => {
  it("renders correctly", () => {
    renderer.create(<Feed />);
  });
});
