import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const databaseId = process.env.NOTION_DB_ID;

export const getOverview = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "status",
          select: {
            equals: "published",
          },
        },
      ],
    },
  });

  return response.results;
};

export const getPost = async (postId) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  const blocks = await notion.blocks.children.list({ block_id: postId });

  return { pageInfo: page, blocks: blocks.results };
};
