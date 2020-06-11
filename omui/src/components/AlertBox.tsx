import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle as ChakraAlertTitle,
  AlertDescription,
  IAlert
} from '@chakra-ui/core';

interface AlertBoxProps extends IAlert {
  title?: string;
  children: string | React.ReactNode;
}

export const AlertBox = ({ title, children, ...props }: AlertBoxProps) => (
  <Alert {...props}>
    <AlertIcon size="8" mr={0} />
    {title && (
      <ChakraAlertTitle mt={3} mb={1} fontSize="lg">
        {title}
      </ChakraAlertTitle>
    )}
    <AlertDescription maxWidth="sm">{children}</AlertDescription>
  </Alert>
);

AlertBox.defaultProps = {
  status: 'info',
  variant: 'subtle',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  py: 12
};