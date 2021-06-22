import { Text, Link, useColorMode } from '@chakra-ui/react';

const TextRenderer = ({ text }) => {
  const { colorMode } = useColorMode();

  if (!text) {
    return null;
  }

  const resolveTextColor = (color, code) => {
    if (code) {
      return colorMode === 'dark' ? 'gray.900' : 'red.500';
    }

    if (color !== 'default') {
      return color;
    }

    return '';
  };

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
        return 'strikethrough underline';
      }

      if (strikethrough) {
        return 'striketrough';
      }

      return 'underline';
    };

    const textProps = {
      key: index,
      fontWeight: bold ? 600 : 400,
      fontFamily: code ? 'monospace' : '',
      fontStyle: italic ? 'italic' : 'unset',
      textDecoration: resolveTextDecoration(),
      color: resolveTextColor(color, code),
      bg: code ? 'gray.200' : '',
      borderRadius: code ? 'base' : '',
      py: code ? '3px' : '',
      px: code ? '6px' : '',
    };

    if (text.link) {
      return (
        <Link
          href={text.link.url}
          target="_blank"
          rel="noopener noreferrer"
          {...textProps}
          color="blue.400"
        >
          {text.content}
        </Link>
      );
    }

    return (
      <Text key={index} as="span" {...textProps}>
        {text.content}
      </Text>
    );
  });
};

export default TextRenderer;
