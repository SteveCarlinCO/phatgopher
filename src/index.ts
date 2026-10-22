const response = await env.AI.run(
  'google/nano-banana-2.1',
  {
    prompt:
      'A cinematic landscape of a misty mountain valley at sunrise, with warm golden light and dramatic clouds',
    aspect_ratio: '16:9',
  },
)
console.log(response)
