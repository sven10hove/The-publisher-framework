import { postImageSource } from '@/lib/config';
import { Box, Image, Text, Link, useColorMode } from '@chakra-ui/react';

const TextRenderer = ({ content, plain }) => {
  const { colorMode } = useColorMode();

  if (content.length === 0) {
    return <Box py={4} />;
  }

  const resolveTextDecoration = (strikethrough, underline) => {
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

  const resolveTextColor = (color, code) => {
    if (code) {
      return colorMode === 'dark' ? 'gray.900' : 'red.500';
    }

    if (color !== 'default') {
      return color;
    }

    return '';
  };

  const resolveTextProps = (
    bold,
    code,
    color,
    italic,
    strikethrough,
    underline,
  ) => ({
    fontWeight: bold ? 600 : 400,
    fontFamily: code ? 'monospace' : '',
    fontStyle: italic ? 'italic' : 'unset',
    textDecoration: resolveTextDecoration(strikethrough, underline),
    color: resolveTextColor(color, code),
    bg: code ? 'gray.200' : '',
    borderRadius: code ? 'base' : '',
    py: code ? '3px' : '',
    px: code ? '6px' : '',
  });

  if (content.length === 1) {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = content[0];

    if (text.link) {
      if (postImageSource.some((u) => text.link.url.includes(u))) {
        return (
          <Box mx={[null, null, '-60px']}>
            <Image src={text.link.url} alt="image" w="full" ignoreFallback />
          </Box>
        );
      }

      return (
        <Text as={plain ? 'span' : 'p'}>
          <Link
            href={text.link.url}
            target="_blank"
            rel="noopener noreferrer"
            {...resolveTextProps(
              bold,
              code,
              color,
              italic,
              strikethrough,
              underline,
            )}
            color="blue.400"
          >
            {text.content}
          </Link>
        </Text>
      );
    }

    return (
      <Text
        as={plain ? 'span' : 'p'}
        {...resolveTextProps(
          bold,
          code,
          color,
          italic,
          strikethrough,
          underline,
        )}
      >
        {text.content}
      </Text>
    );
  }

  const renderSpans = content.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    if (text.link) {
      return (
        <Link
          key={index}
          href={text.link.url}
          target="_blank"
          rel="noopener noreferrer"
          {...resolveTextProps(
            bold,
            code,
            color,
            italic,
            strikethrough,
            underline,
          )}
          color="blue.400"
        >
          {text.content}
        </Link>
      );
    }

    return (
      <Text
        key={index}
        as="span"
        {...resolveTextProps(
          bold,
          code,
          color,
          italic,
          strikethrough,
          underline,
        )}
      >
        {text.content}
      </Text>
    );
  });

  return <Text as={plain ? 'span' : 'p'}>{renderSpans}</Text>;
};

export default TextRenderer;
