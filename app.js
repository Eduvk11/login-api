// app.js
const Koa = require("koa");
const cors = require("@koa/cors");
const Router = require("koa-router");
var bodyParser = require("koa-bodyparser");
const validator = require("./validator");
const app = new Koa();
const router = new Router();
app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.post("/login", (ctx, next) => {
  if (validator(ctx.request.body)) {
    next();
    ctx.response.body = {
      token: "2cc865597f522db695e0880c5eb9d339"
    };
  } else {
    ctx.throw(400, "Bad request");
  }
});

app.listen(3000);
