import { Text, Link } from "@chakra-ui/react";

const TextRenderer = ({ text }) => {
  if (!text) {
    return null;
  }

  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    const resolveTextDecoration = () => {
      if (!strikethrough && !underline) {
        return;
      }

      if (strikethrough && underline) {
        return "strikethrough underline";
      }

      if (strikethrough) {
        return "striketrough";
      }

      return "underline";
    };

    const textProps = {
      key: index,
      fontWeight: bold ? 600 : 400,
      fontFamily: code ? "monospace" : "",
      fontStyle: italic ? "italic" : "unset",
      textDecoration: resolveTextDecoration(),
      color: color === "default" ? "gray.900" : color,
    };

    if (text.link) {
      return (
        <Link href={text.link.url} {...textProps}>
          {text.content}
        </Link>
      );
    }

    return (
      <Text as="span" {...textProps}>
        {text.content}
      </Text>
    );
  });
};

export default TextRenderer;
