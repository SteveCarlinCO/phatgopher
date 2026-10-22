export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/.well-known/assetlinks.json") {
      return new Response(
        JSON.stringify({
          relation: ["delegate_permission/common.handle_all_urls"],
          target: {
            namespace: "android_app",
            package_name: "com.steve.sealed",
            sha256_cert_fingerprints: [
              "0F:C6:EC:99:41:84:B3:32:AD:13:67:9D:84:18:06:28:44:C3:38:3F:D9:82:7C:10:19:B1:21:9D:F7:62:01:D5",
            ],
          },
        }, null, 2),
        {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
        }
      );
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

    if (url.pathname === "/favicon.ico") {
      return new Response(null, {
        status: 204,
        headers: {
          "content-type": "image/x-icon",
          "cache-control": "no-store",
        },
      });
    }

    try {
      const inputs = {
        prompt:
          "Photorealistic landscape image of an adorable, always clothed, anthropomorphic pocket gopher holding a Canon camera while standing upright like a wildlife photographer, shot at 85mm, cinematic composition, natural lighting, highly detailed, realistic fur, professional wildlife photography",
        num_steps: 50,
        guidance_scale: 7.5,
        width: 1024,
        height: 1024,
      };

      const response = await env.AI.run(
        "@cf/stabilityai/stable-diffusion-xl-base-1.0",

        inputs
      );

      return new Response(response, {
        headers: {
          "content-type": "image/png",
        },
      });
    } catch (err) {
      console.error("AI generation failed:", err);
      return new Response("AI generation failed", {
        status: 500,
        headers: {
          "content-type": "text/plain; charset=utf-8",
        },
      });
    }
  },
} satisfies ExportedHandler<Env>;
