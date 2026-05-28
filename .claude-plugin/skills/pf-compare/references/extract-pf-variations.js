// Extracts PF variations from the PatternFly component showcase page.
// Expected DOM: Each variation lives in a div with id="ws-core-c-{component}-{slug}".
// Inside each container, a heading element with id="{slug}" provides the title,
// and a child div.ws-preview-html contains the rendered HTML preview.
// The "ws-core-c-" prefix is the PatternFly workshop/showcase convention.
(componentSlug) => {
  const prefix = 'ws-core-c-' + componentSlug + '-';
  const containers = document.querySelectorAll('div[id^="' + prefix + '"]');
  const variations = [];
  for (const container of containers) {
    const id = container.id;
    const slug = id.replace(prefix, '');
    const heading = document.getElementById(slug);
    const title = heading ? heading.textContent.trim() : slug.replace(/-/g, ' ');
    const preview = container.querySelector('.ws-preview-html');
    const html = preview ? preview.innerHTML.trim() : '';
    variations.push({ slug, title, html });
  }
  return variations;
}