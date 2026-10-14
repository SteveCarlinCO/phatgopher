# Phat Gopher Generator 🦫

> *"Ffs another phat gopher!"*

It all started because a friend sent over a photo of a license plate reading **PHTGPHR** with that exact exclamation. 

That single text triggered an uncontrollable laugh, and instead of just scrolling away, the only logical move was to weaponize the absurdity. This repository houses a monument to that joke: a completely ridiculous webpage built for one sole purpose - generating endless images of a phat gopher.

## What It Does
* Generates a relentless stream of absolute unit gophers.
* Serves zero practical utility. 
* Delivers exactly what the license plate promised.

Use the Text To Image App to create your own version:

# Text To Image App

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/text-to-image-template)

![Text To Image Template Preview](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/dddfe97e-e689-450b-d5a9-d49801da6a00/public)

<!-- dash-content-start -->

Generate images based on text prompts using [Workers AI](https://developers.cloudflare.com/workers-ai/). In this example, going to the website will generate an image from the prompt "cyberpunk cat" using the `@cf/stabilityai/stable-diffusion-xl-base-1.0` model. Be patient! Your image may take a few seconds to generate.

<!-- dash-content-end -->

## Getting Started

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/text-to-image-template
```

A live public deployment of this template is available at [https://text-to-image-template.templates.workers.dev](https://text-to-image-template.templates.workers.dev)

## Setup Steps

1. Install the project dependencies with a package manager of your choice:
   ```bash
   npm install
   ```
2. Deploy the project!
   ```bash
   npx wrangler deploy
   ```
3. Monitor your worker
   ```bash
   npx wrangler tail
   ```
