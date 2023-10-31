import { test, expect, vi } from "vitest";
import { Server } from "./respit";

test("calls back from one request", () => {
  const server = new Server();
  const cb = vi.fn();
  server.expect("GET", cb);
  server.handle("GET");
  expect(cb).toHaveBeenCalled();
});

test("calls back from two requests", () => {
  const server = new Server();
  const getCb = vi.fn();
  const postCb = vi.fn();
  server.expect("GET", getCb);
  server.expect("POST", postCb);
  server.handle("GET");
  server.handle("POST");
  expect(getCb).toHaveBeenCalledOnce();
  expect(postCb).toHaveBeenCalledOnce();
});

test("calls back only once", () => {
  const server = new Server();
  const cb = vi.fn();
  server.expect("GET", cb);
  server.handle("GET");
  server.handle("GET");
  expect(cb).toHaveBeenCalledOnce();
});
