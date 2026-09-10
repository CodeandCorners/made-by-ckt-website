
/*
 * Site configuration — the first file theme users should edit.
 * Changing this file switches the site's metadata, OGP, RSS, and footer text.
 * Theme internals (under src/components, etc.) simply reference these values
 * instead of hard-coding them.
 */
export const site = {
  /** Site name. Used for the <title> template, logo, and RSS title. */
  name: 'Made by CKT',

  /** Full title used when no page-specific title is provided, such as on the homepage. */
  title: 'Made by CKT',

  /** Title template. The page title is inserted where %s appears. */
  titleTemplate: '%s — Made by CKT',

  /** Default meta description. Can be overridden on individual pages. */
  description: 'Made by CKT creates apps that ...',

  /** Production URL (without a trailing slash). Change this to match your deployment URL. */
  url: 'https://YOUR-DOMAIN-HERE.co.uk',

  /** Content language. */
  locale: 'en-GB',

  /** Default author. Can be overridden in the article frontmatter. */
  author: 'Made by CKT',

  /**
   * Default OGP image (absolute path relative to the site root).
   * If you don't have one, you can leave this as undefined (no og:image will be output).
   */
  defaultOgImage: undefined as string | undefined,

  /** Social media handles. If left as an empty string, the corresponding tag will not be output. */
  social: {
    twitter: '',
    github: '',
  },

  /** Number of posts displayed per page on the blog listing. */
  postsPerPage: 6,
};
export type SiteConfig = typeof site;