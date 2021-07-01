module.exports = {
  // Basic site information (required)
  name: 'Sven',
  domain: 'sventenhove.nl',
  url: 'https://sventenhove.nl',
  description: 'thoughts ideas and what not',

  // SEO specific (optional)
  defaultSocialImage: '',

  /* 
    Social media URLS (optional)

    - Don't have one of the socials below? You can leave the URL empty like ''.
    - As of now it's not possible to alter the icons (we might add this in a later version), 
      so please keep the icon value as is.
  */
  socials: [
    {
      name: 'Facebook',
      url: '',
      icon: 'SiFacebook',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sven10hove',
      icon: 'SiTwitter',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sven10hove/',
      icon: 'SiInstagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sventenhove/',
      icon: 'SiLinkedin',
    },
    {
      name: 'Youtube',
      url: '',
      icon: 'SiYoutube',
    },
    {
      name: 'TikTok',
      url: '',
      icon: 'SiTiktok',
    },
    {
      name: 'Medium',
      url: '',
      icon: 'SiMedium',
    },
    {
      name: 'Twitch',
      url: '',
      icon: 'SiTwitch',
    },
  ],

  /* 
    Currently, it's not possible to fetch the images from the notion API.
    So until then, you can make use of the postImageSource.

    If you add this url as a link to your post, it will always get rendered as an image.
  */
  postImageSource: [
    'images.unsplash.com',
    'res.cloudinary.com',
    'dl.dropboxusercontent.com',
  ],
};
