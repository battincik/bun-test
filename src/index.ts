import { Elysia } from "elysia";
import { logger } from "@tqman/nice-logger";

const app = new Elysia();

app.use(
    logger({
        mode: "combined",
        withTimestamp: true,
        withBanner: true,
    })
);

app.get("/", () => "Hello Battincik");
app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
