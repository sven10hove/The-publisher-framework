import TextRenderer from "@/components/blocks/TextRenderer";
import { Heading, Text } from "@chakra-ui/react";

const Blocks = ({ blocks }) => {
  if (!blocks) {
    return <p>No blocks available</p>;
  }

  const supportedBlocks = blocks?.filter((p) => p.type !== "unsupported");

  const renderBlocks = supportedBlocks.map((b) => {
    switch (b.type) {
      case "paragraph":
        return (
          <Text key={b.id} mb={8}>
            <TextRenderer text={b.paragraph.text} />
          </Text>
        );
      case "heading_1":
        return (
          <Heading key={b.id} as="h1" fontWeight="700" mb={4}>
            {b.heading_1.text[0].text.content}
          </Heading>
        );
      case "heading_2":
        return (
          <Heading key={b.id} as="h2" fontWeight="700" mb={4}>
            {b.heading_2.text[0].text.content}
          </Heading>
        );
      case "heading_3":
        return (
          <Heading key={b.id} as="h3" fontWeight="700" mb={4}>
            {b.heading_3.text[0].text.content}
          </Heading>
        );
      case "bulleted_list_item":
        return (
          <li key={b.id}>
            <TextRenderer text={b.bulleted_list_item.text} />
          </li>
        );
      case "numbered_list_item":
        return (
          <li key={b.id}>
            <TextRenderer text={b.numbered_list_item.text} />
          </li>
        );
      default:
        return (
          <div key={b.id} w>
            Not supported
          </div>
        );
    }
  });

  return renderBlocks;
};

export default Blocks;
