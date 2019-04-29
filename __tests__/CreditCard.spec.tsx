import "react-native";
import React from "react";
import { CreditCard } from "../src";

import renderer from "react-test-renderer";

describe("CreditCard", () => {
  it("renders correctly", () => {
    renderer.create(<CreditCard />);
  });
});
