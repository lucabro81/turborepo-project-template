import { users } from "~/server/data/mock";
import { sleep } from "~/server/utils";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const user = users.find((user) => {
    if (user.email === email && user.password === password) {
      return user;
    }
  });

  await sleep(500);

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
    });
  }

  return user;
});
