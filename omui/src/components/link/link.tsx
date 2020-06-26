import React from 'react';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/core';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const Link = ({ isExternal, children, ...props }: LinkProps) => {
  if (
    props.href &&
    (props.href.includes('http://') || props.href.includes('https://'))
  ) {
    isExternal = true;
  }

  return (
    <ChakraLink {...props} isExternal={isExternal}>
      {children}
      {isExternal && <ExternalLinkIcon ml="1" mt="-4px" />}
    </ChakraLink>
  );
};

Link.defaultProps = {
  color: 'blue.500',
  _hover: {
    color: 'blue.700',
    textDecoration: 'none'
  }
};

// TODO: Create various Storybook stories related to Chakra documentation