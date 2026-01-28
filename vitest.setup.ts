import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./src/day-9-load-more/server.js";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
