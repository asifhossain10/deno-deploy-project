import { serve } from "https://deno.land/std/http/server.ts";

const handler = (req: Request): Response => {
    return new Response("Hello, Deno Deploy!", {
        headers: { "content-type": "text/plain" },
    });
};

console.log("Server is running...");
serve(handler);
