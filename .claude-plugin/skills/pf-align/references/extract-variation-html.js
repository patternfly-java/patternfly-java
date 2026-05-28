// Extracts the rendered HTML preview for a specific variation from
// the PatternFly component showcase page.
// Expected DOM: div#ws-core-c-{component}-{variation} > div.ws-preview-html
// The "ws-core-c-" prefix is the PatternFly workshop/showcase convention.
(componentSlug, variationSlug) => {
  const prefix = 'ws-core-c-' + componentSlug + '-';
  const container = document.getElementById(prefix + variationSlug);
  if (!container) return null;
  const preview = container.querySelector('.ws-preview-html');
  return preview ? preview.innerHTML.trim() : null;
}