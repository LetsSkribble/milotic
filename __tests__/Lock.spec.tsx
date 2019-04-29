import "react-native";
import React from "react";
import { Lock } from "../src";

import renderer from "react-test-renderer";

describe("Lock", () => {
  it("renders correctly", () => {
    renderer.create(<Lock />);
  });
});
