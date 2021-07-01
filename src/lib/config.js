import siteConfig from '../../site.config';

export function getSiteConfig(key) {
  const value = siteConfig[key];

  if (value !== undefined) {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  throw new Error(`Config error: missing required site config value "${key}"`);
}

export const name = getSiteConfig('name');
export const url = getSiteConfig('url');
export const domain = getSiteConfig('domain');
export const description = getSiteConfig('description');
export const fathomCode = getSiteConfig('fathomCode');
export const socialImage = getSiteConfig('defaultSocialImage');

export const socials = getSiteConfig('socials');

export const postImageSource = getSiteConfig('postImageSource');
