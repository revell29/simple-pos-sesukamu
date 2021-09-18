import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const ButtonPrimary: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      w="full"
      size="md"
      variant="solid"
      bg="primary.50"
      color="white"
      py={6}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
