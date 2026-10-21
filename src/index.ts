export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve a simple static health check at the domain root without triggering any redirect
    // or the image-generation flow.
    if (url.pathname === "/healthz.txt") {
      return new Response("ok", {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    const inputs = {
      prompt:
        "Photorealistic landscape image of an adorable, always clothed, anthropomorphic pocket gopher holding a Canon camera while standing upright like a wildlife photographer, shot at 85mm, cinematic composition, ultra detailed, crisp focus",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-2.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
