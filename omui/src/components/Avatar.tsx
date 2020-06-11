import React from 'react';
import { Avatar as ChakraAvatar, AvatarBadge, IAvatar } from '@chakra-ui/core';

interface AvatarProps extends IAvatar {
  badge?: string;
}

export const Avatar = ({ badge, ...props }: AvatarProps) => (
  <ChakraAvatar {...props}>
    {badge && <AvatarBadge bg={`${badge}.500`} size="1em" />}
  </ChakraAvatar>
);

Avatar.defaultProps = {
  size: 'md'
};

export { AvatarGroup } from '@chakra-ui/core';