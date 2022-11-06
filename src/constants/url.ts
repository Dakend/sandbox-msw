import type { Values } from "../types";

export type Url = Values<typeof URL>;

export const URL = {
  MEMBER: "/members",
  POSTS: "/posts",
} as const;
