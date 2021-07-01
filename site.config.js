module.exports = {
  // Basic site information (required)
  name: 'twan.dev',
  domain: 'twan.dev',
  url: 'https://twan.dev',
  description: 'Twan Kruiswijk personal blog about life, music, code and more.',
  fathomCode: 'TBSAIDMS',

  // SEO specific (optional)
  defaultSocialImage:
    'https://res.cloudinary.com/twankruiswijk/image/upload/v1624446915/twan-dev-social_zzbzzv.jpg',

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
      url: 'https://twitter.com/twankrui',
      icon: 'SiTwitter',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/twankrui',
      icon: 'SiInstagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/twan-kruiswijk-bb853a71/',
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
      url: 'https://twitch.tv/twankrui',
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
