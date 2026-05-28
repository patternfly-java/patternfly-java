// Extracts PFJ snippets from the PatternFly Java showcase page.
// Expected DOM: h3.ws-heading > stackItem > stack (3 levels up).
// The stack's second child contains the preview div with rendered HTML.
// This traversal is fragile -- if the PFJ showcase restructures its
// snippet layout, update the parentElement chain accordingly.
() => {
  const headings = document.querySelectorAll('h3.ws-heading');
  const snippets = [];
  for (const h3 of headings) {
    const id = h3.id;
    const title = h3.textContent.trim();
    const stack = h3.parentElement?.parentElement?.parentElement;
    if (!stack) continue;
    const children = stack.children;
    if (children.length < 2) continue;
    const previewItem = children[1];
    const previewDiv = previewItem?.firstElementChild;
    const html = previewDiv ? previewDiv.innerHTML.trim() : '';
    snippets.push({ id, title, html });
  }
  return snippets;
}