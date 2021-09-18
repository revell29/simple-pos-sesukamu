import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const ButtonIcon: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button {...rest} w="full" size="md" variant="solid" py={6}>
      {children}
    </Button>
  );
};

export default ButtonIcon;
