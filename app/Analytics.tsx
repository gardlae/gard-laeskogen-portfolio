export function Analytics() {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
  if (!token) return null;

  return (
    <script
      data-cf-beacon={JSON.stringify({ token })}
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
    />
  );
}
