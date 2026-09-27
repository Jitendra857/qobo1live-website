# Qobo1Live landing-page image handoff

## Direct replacements
Copy these from images/ into the website public/images/ directory, preserving names:
- logo-dummy.svg — 450 × 110, existing app heart/camera mark plus wordmark
- hero-phone-stream.svg — 500 × 850, promotional hero illustration
- banner-1.svg — 1200 × 500, PK battles
- banner-2.svg — 1200 × 500, agency community
- banner-3.svg — 1200 × 500, virtual gifts
- banner-4.svg — 1200 × 500, voice rooms

All six keep the existing filename, extension and SVG viewBox dimensions.
Artwork SVGs embed JPEG data and are self-contained; these are not fully vector illustrations. No external asset requests, scripts or fonts are required. Keep SVG image data intact when optimizing. Serve as image/svg+xml. Purge the image/CDN cache after deployment.

## Stream thumbnails: one small markup change
The live page currently draws these four placeholders as inline SVG elements. There are no existing filenames to preserve. Copy the four stream-*.svg files into public/images/ and replace ONLY each .stream-thumbnail > svg with the matching img:
- [data-category="trending"] → /images/stream-trending.svg
- [data-category="pk"] → /images/stream-pk.svg
- [data-category="audio"] → /images/stream-audio.svg
- [data-category="vip"] → /images/stream-vip.svg

Example:
<img src="/images/stream-audio.svg" alt="Voice room illustration" width="400" height="500" loading="lazy" style="width:100%;height:100%;object-fit:cover" />

Keep the existing overlay tags, card click handlers and filter attributes.
Images are illustrative category artwork, not portraits of the named live users. Use actual thumbnails if cards represent real live users.

## QR code: pending destination
reference/qr-code.svg is the unchanged original, for reference only. DO NOT deploy it as a newly functional QR.
The inspected download link points to "#"; no actual store/APK link was available.
Supply the final download URL to generate a valid replacement with the same qr-code.svg name.

## Content alignment
Update banner alt text to match the replacement themes. In particular banner-3 is now gifts, not a 100% recharge offer.
The new art does not promise bonuses, payouts, prize amounts or viewer counts.
Existing page text/statistics are outside this asset-only handoff and remain unchanged.
Existing store badge icons and interface icons are inline SVG/emoji, not external image files.

## Files
preview.html — open locally to review all replacements.
previews/ — high-resolution JPEG copies for design review.
manifest.json — dimensions and mapping.
PROMPTS.json — built-in image-generation prompts.

Generated using built-in imagegen on 2026-09-24. Native SVG logo uses the existing repository app mark. No website deployment or Flutter source changes were made.

