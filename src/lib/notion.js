import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const databaseId = process.env.NOTION_DB_ID;

export const getPosts = async (cursor) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 10,
    start_cursor: cursor ? cursor : undefined,
    filter: {
      and: [
        {
          property: 'status',
          select: {
            equals: 'published',
          },
        },
        {
          property: 'slug',
          rich_text: {
            is_not_empty: true,
          },
        },
        {
          property: 'type',
          multi_select: {
            does_not_contain: 'reading',
          },
        },
      ],
    },
  });

  return {
    data: response.results,
    next_cursor: response.next_cursor,
    has_more: response.has_more,
  };
};

export const getPostBySlug = async (slug) => {
  const post = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'slug',
          text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = post.results[0].id;

  const page = await notion.pages.retrieve({ page_id: pageId });
  const blocks = await notion.blocks.children.list({ block_id: pageId });

  return { pageInfo: page, blocks: blocks.results };
};

export const getPostById = async (postId) => {
  const post = await notion.pages.retrieve({ page_id: postId });
  const blocks = await notion.blocks.children.list({ block_id: postId });

  return { pageInfo: post, blocks: blocks.results };
};

export const getReadings = async (cursor) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 10,
    start_cursor: cursor ? cursor : undefined,
    filter: {
      and: [
        {
          property: 'status',
          select: {
            equals: 'published',
          },
        },
        {
          property: 'type',
          multi_select: {
            contains: 'reading',
          },
        },
      ],
    },
  });

  return {
    data: response.results,
    next_cursor: response.next_cursor,
    has_more: response.has_more,
  };
};
