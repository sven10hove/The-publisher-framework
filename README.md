Blion is a blog template that uses NextJS as a front-end and Notion as its CMS via the official API. This is also the repository for my blog [twan.dev](https://twan.dev), so you can check it out running in production.

## Getting Started

Please reference [this article](https://twan.dev/post/setup-your-own-notion-blog) written by the author if you want to get started quickly. It contains the Notion database template link and the required steps to get up and running with your blog.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Second, update the values inside of the `site.config.js` file to customize your blog.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Image support

The official Notion API doesn't support images yet, and this is why we coded our own solution. You can alter the `postImageSource` to include the domains you want to use for inline images.

### How to work with the image support?

1. Paste the URL of the image as a separate line inside of your Notion document.
2. For example, if we have the following URL `https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`, make sure that you add the `images.unsplash.com` domain to the `site.config.js` `postImageSource` like `['images.unsplash.com']`.

```js
...
/*
Currently, it's not possible to fetch the images from the notion API.
So until then, you can make use of the postImageSource.

If you add this url as a link to your post, it will always get rendered as an image.
*/
postImageSource: [
    'res.cloudinary.com',
    'dl.dropboxusercontent.com',
    // add the domain here
    'images.unsplash.com',
],

```

Now all URLs that match the domains inside of `postImageSource` will get rendered as an image.
