import { posts } from "~/server/data/mock";
import { sleep } from "~/server/utils";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  await sleep(500);

  try {
    return posts.filter((post) => post.id === id)[0];
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }
});
