// Tiny className combiner (no dependency). Accepts strings, arrays, falsy values.
export function cn(...parts) {
  return parts
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
    .trim()
}

// Build an absolute in-app path for a site, e.g. siteLink('filipitsch', 'servicos')
// -> '/site/filipitsch/servicos'. Use ABSOLUTE links inside sites so routing is
// unambiguous under the /site/:slug/* parent route.
export function siteLink(slug, sub = '') {
  const base = `/site/${slug}`
  return sub ? `${base}/${sub}` : base
}
