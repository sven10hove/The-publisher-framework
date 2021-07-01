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
