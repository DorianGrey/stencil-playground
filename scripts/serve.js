const Koa = require("koa");
const compress = require("koa-compress");
const Router = require("koa-router");
const send = require("koa-send");

const app = new Koa();
const router = new Router();

router.get("*", async (ctx) => {
  await send(ctx, "index.html");
});

app.use(require("koa-static")("www"))
app.use(compress());

app
  .use(router.routes())
  .use(router.allowedMethods())
  ;

app.listen(4001, () => {
  console.info("Listening on port 4001...")
});