const { Client } = require("@notionhq/client");

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
  const response = await notion.blocks.children.list({
    block_id: postId,
  });

  return response.results;
};
