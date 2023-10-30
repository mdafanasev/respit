import { test, expect } from "vitest";
import { respit } from "./respit";

test("returns truthy", () => {
  expect(respit()).toBeTruthy();
});
