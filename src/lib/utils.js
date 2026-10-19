export function stripHTML(html = '') {
  if (typeof html !== 'string') return ''
  return html.replace(/<[^>]+>/g, '').trim()
}