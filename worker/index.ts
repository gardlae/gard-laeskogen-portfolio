import handler from "vinext/server/app-router-entry";

type HandlerEnv = Parameters<typeof handler.fetch>[1];
type HandlerContext = Parameters<typeof handler.fetch>[2];

function withSecurityHeaders(response: Response) {
  const headers = new Headers(response.headers);

  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  );

  return new Response(response.body, {
    headers,
    status: response.status,
    statusText: response.statusText,
  });
}

const worker = {
  async fetch(request: Request, env: HandlerEnv, ctx: HandlerContext) {
    const url = new URL(request.url);
    const isPublicHost =
      url.hostname === "gardlaeskogen.com" || url.hostname === "www.gardlaeskogen.com";

    if (isPublicHost && (url.protocol !== "https:" || url.hostname === "gardlaeskogen.com")) {
      url.protocol = "https:";
      url.hostname = "www.gardlaeskogen.com";
      return withSecurityHeaders(Response.redirect(url.toString(), 308));
    }

    const response = await handler.fetch(request, env, ctx);
    return withSecurityHeaders(response);
  },
};

export default worker;
