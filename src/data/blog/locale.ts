import type { SiteLocale } from '../../i18n/locales';
import type { BlogPostFull } from './types';
import { enBlogArticles } from './posts/en-articles';
import { esBlogArticles } from './posts/es-articles';
import { deBlogArticles } from './posts/de-articles';
import { frBlogArticles } from './posts/fr-articles';
import { localeMetaDescriptionOverride } from './metaDescriptions';
import { blogArtFor } from './topicArt';

function sortBlogPosts(posts: BlogPostFull[]): BlogPostFull[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

const blogPostsByLocale: Record<SiteLocale, BlogPostFull[]> = {
  en: enBlogArticles,
  es: esBlogArticles,
  de: deBlogArticles,
  fr: frBlogArticles,
};

function withTopicArt(post: BlogPostFull, locale: SiteLocale): BlogPostFull {
  const art = blogArtFor(post.slug, locale);
  const metaDescription = locale === 'en'
    ? post.metaDescription
    : (localeMetaDescriptionOverride(post.slug, locale) ?? post.metaDescription);
  return {
    ...post,
    image: art.src,
    imageAlt: art.alt,
    imageWidth: art.width,
    imageHeight: art.height,
    metaDescription,
  };
}

export function getBlogPostsForLocale(locale: SiteLocale): BlogPostFull[] {
  return sortBlogPosts(blogPostsByLocale[locale]).map((post) => withTopicArt(post, locale));
}

export function getBlogPost(slug: string, locale: SiteLocale): BlogPostFull | undefined {
  return getBlogPostsForLocale(locale).find((p) => p.slug === slug);
}
