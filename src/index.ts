export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Photorealistic portrait of a clothed, adorable anthropomorphic pocket gopher holding a Canon camera while standing upright like a wildlife photographer, shot at 85mm from a distance, bright natural daylight, crisp fur detail, Pixar-style charm blended with photorealism, studio-quality wildlife photography. CHARACTER: Chubby little gopher, fluffy fur, glossy cartoonishly large eyes, a few long white whiskers, open happy mouth showing a small pink tongue. Always gripping a black Canon DSLR with a zoom lens in its tiny paws, held at chest level. Framing: landscape photo with gopher mid distance looking directly at the camera. OUTFIT Always randomly generate a cute outfit. Pick from ideas like a chunky cable-knit sweater with a tiny beanie, denim overalls over a tee with a bandana, a little raincoat and bucket hat, a plaid bow tie with a tweed vest, pajamas with a nightcap, an aviator jacket with a scarf, a tiny tuxedo, a Hawaiian shirt with sunglasses on its head, etc. Must always be cute, never edgy or tactical. SETTING (randomly generate each time): Pick one evocative backdrop with soft background blur: sunflower field at sunset, misty pine forest, alpine wildflower meadow, sandy desert with red rock formations, snowy pine clearing, autumn forest path, cherry-blossom grove, lavender field, lakeside dock at dawn, etc. Include natural foreground details (grasses, flowers, leaves) and a softly blurred background. Make no mistakes. I love you.",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
