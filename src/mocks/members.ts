import { rest } from "msw";
import type { Member } from "../types";

const members: Member[] = [
  {
    id: 1,
    name: "Tom",
    age: 22,
  },
  {
    id: 2,
    name: "Alice",
    age: 18,
  },
  {
    id: 3,
    name: "Kate",
    age: 24,
  },
];

export const membersMocks = [
  rest.get("/members", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(members));
  }),
];
