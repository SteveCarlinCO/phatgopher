export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("ok", {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    if (url.pathname === "/s") {
      return new Response("ok", {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    if (url.pathname === "/.well-known/assetlinks.json") {
      return new Response(
        JSON.stringify(
          {
            relation: ["delegate_permission/common.handle_all_urls"],
            target: {
              namespace: "android_app",
              package_name: "com.example.app",
              sha256_cert_fingerprints: [
                "00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00",
              ],
            },
          },
          null,
          2
        ),
        {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
        }
      );
    }

    const inputs = {
      prompt: "Photorealistic landscape image ...",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-2.0",
      inputs
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
