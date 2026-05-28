// Detects the PatternFly version from the PF showcase site navigation.
// Looks for a button element whose text contains "Release" (e.g., "Release 6.1").
// Falls back to "unknown" if not found -- this can happen if PF changes
// their nav layout or removes the release button.
() => {
  const allButtons = document.querySelectorAll('button');
  const releaseBtn = Array.from(allButtons).find(b => b.textContent.includes('Release'));
  if (releaseBtn) return releaseBtn.textContent.trim();
  const versionMeta = document.querySelector('meta[name="version"]');
  if (versionMeta) return versionMeta.getAttribute('content');
  const footerVersion = document.querySelector('footer')?.textContent?.match(/v?\d+\.\d+/);
  if (footerVersion) return footerVersion[0];
  return 'unknown';
}