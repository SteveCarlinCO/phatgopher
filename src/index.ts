export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve a static 200 response for the well-known Android asset links file.
    // This avoids the worker falling through to the AI image route and any redirect behavior.
    if (url.pathname === "/.well-known/assetlinks.json") {
      return new Response(
        JSON.stringify(
          {
            relation: ["delegate_permission/common.handle_all_urls"],
            target: {
              namespace: "android_app",
              package_name: "com.example.app",
              sha256_cert_fingerprints: ["00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00"],
            },
          },
          null,
          2,
        ),
        {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
        },
      );
    }

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
