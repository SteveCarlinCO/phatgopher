export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Photorealistic close-up portrait of an adorable anthropomorphic pocket gopher standing upright like a wildlife photographer, shot at 85mm with shallow depth of field, bright natural daylight, crisp fur detail, Pixar-style charm blended with photorealism, studio-quality wildlife photography. CHARACTER (always the same): fluffy golden-tan fur, cream-colored muzzle, glossy cartoonishly large black eyes, long white whiskers, open happy mouth showing a small pink tongue; gripping a black Canon DSLR with a zoom lens in its tiny paws, held at chest level; framing: tight chest-up close-up, gopher looking directly at the camera. OUTFIT (randomly generate one cute outfit each time — never repeat the same one): pick from ideas like a chunky cable-knit sweater with a tiny beanie, denim overalls over a tee with a bandana, a little raincoat and bucket hat, a plaid bow tie with a tweed vest, pajamas with a nightcap, an aviator jacket with a scarf, a tiny tuxedo, a Hawaiian shirt with sunglasses on its head, etc.; must always be cute, never edgy or tactical. SETTING (randomly generate each time): pick one evocative backdrop with soft background blur: sunflower field at sunset, misty pine forest, alpine wildflower meadow, sandy desert with red rock formations, snowy pine clearing, autumn forest path, cherry-blossom grove, lavender field, lakeside dock at dawn, etc.; include natural foreground details (grasses, flowers, leaves) and a softly blurred background.",
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
