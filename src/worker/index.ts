import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// Example worker-handled route. Add routes here to have the Worker
// respond before the static-asset SPA fallback returns index.html.
app.get("/hello", (c) => c.text("hello from worker"));

// Prefer API namespace to avoid SPA navigation fallback intercepting requests.
app.get('/api/hello', (c) => c.json({ message: 'hello from worker (api)' }));
app.get("/hello", (c) => c.text("Hello, Hono on Cloudflare Workers!"));

export default app;
