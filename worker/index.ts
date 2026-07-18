import handler from "vinext/server/app-router-entry";

type HandlerEnv = Parameters<typeof handler.fetch>[1];
type HandlerContext = Parameters<typeof handler.fetch>[2];

const worker = {
  async fetch(request: Request, env: HandlerEnv, ctx: HandlerContext) {
    const url = new URL(request.url);

    if (url.hostname === "gardlaeskogen.com") {
      url.hostname = "www.gardlaeskogen.com";
      return Response.redirect(url.toString(), 308);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
