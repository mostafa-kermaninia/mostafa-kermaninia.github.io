# Portfolio portrait

The hero and About page use `public/images/mostafa-studio.webp`, an edit of the photograph supplied by Mostafa on 15 October 2026. The original uploaded photograph is preserved separately; the previous website asset remains at `public/images/mostafa.jpg` for existing links.

The edit was made with the built-in image generation tool. The delivered PNG was converted to WebP without changing its dimensions or composition; transparency is retained. Display dimensions are 1122 × 1402. CSS contains the whole image and places it against the page background rather than a rectangular photo panel.

## Edit specification

Use case: background extraction and identity-preserving portrait retouch. Create a premium monochrome editorial portrait cutout for a minimal black-and-white personal portfolio. Preserve the recognizable face, facial proportions, age, wavy hairstyle, glasses, beard, expression, black turtleneck, and dark coat. Remove the outdoor background with real transparent alpha, including fine hair edges. Use soft directional studio lighting, subtle fill, rich dark clothing, clean highlights, and natural skin texture. Reduce distracting blue lens glare while retaining realistic glass and visible eyes. Use centered vertical head-and-upper-torso framing, complete hair, comfortable headroom, and shoulders reaching the lower edges. Extend only the lower coat if required. No face reshaping, plastic skin, text, logos, props, borders, or artificial drop shadow.

The result is a retouched portrait, not an unedited studio photograph. Future replacements should preserve alpha and update both image dimensions in `src/render.mjs`.
