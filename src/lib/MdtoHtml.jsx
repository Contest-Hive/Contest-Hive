import { marked } from "marked";

// Override function
const renderer = {
  heading(text, depth) {
    return `<strong>${text}</strong>`;
  },
  codespan(text) {
    return `<code>${text}</code>`;
  },
  listitem(text) {
    return `<p>${text}</p>`;
  },
  hr() {
    return `<br>`;
  },
  image(href, title, text) {
    return `<a href="${href}">image</a>`;
  },
  codespan(text) {
    return `<code>${text}</code>`;
  },
  code(code, language) {
    return `<pre><code>${code}</code></pre>`;
  },
  table(header, body) {
    return `<table><thead>${header}</thead><tbody>${body}</tbody></table>`;
  },
  tablerow(content) {
    return `<tr>${content}</tr>`;
  },
  tablecell(content, flags) {
    return `<td>${content}</td>`;
  },
  checkbox(checked) {
    return `<input type="checkbox" ${checked ? "checked" : ""}>`;
  },
  link(href, title, text) {
    return `<a href="${href}">${text}</a>`;
  },
  paragraph(text) {
    return `${text}\n`;
  },
  strong(text) {
    return `<b>${text}</b>`;
  },
  em(text) {
    return `<i>${text}</i>`;
  },
  del(text) {
    return `<s>${text}</s>`;
  },
};

marked.use({ renderer });

export function MdToHtml(text) {
  return marked.parse(text);
}

export function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
