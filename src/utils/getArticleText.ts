import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'

export default function getArticleText(post: any) {
  const html = new MarkdownIt().render(post.body)
  return sanitizeHtml(html, { allowedTags: [] })
}
