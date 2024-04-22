const { marked } = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdown(markdownContent) {
  const turndownService = new TurndownService();

  //convert markdown to HTML
  const html = marked.parse(markdownContent);

  //sanitize HTML content
  const cleanedHtml = sanitizeHtml(html, sanitizeHtml.defaults.allowedTags);

  //convert html back to markdown
  const markdown = turndownService.turndown(cleanedHtml);

  return markdown;
}

module.exports = sanitizeMarkdown;
