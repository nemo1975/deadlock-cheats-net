import { resolveCheckoutHref } from '../config/checkout';
import { normalizeInternalPath } from './path';

/** Markdown `[label](path)` → internal anchor. Affiliate checkout URLs stay absolute. */
export function linkifyMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
    const normalized = normalizeInternalPath(resolveCheckoutHref(href));
    return `<a href="${normalized}">${label}</a>`;
  });
}
