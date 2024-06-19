import { posts } from "~/server/data/mock";
import { sleep } from "~/server/utils";

export default defineEventHandler(async () => {
  await sleep(500);
  return posts;
});
