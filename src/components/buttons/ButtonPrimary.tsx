import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface IButtonPrimary extends ButtonProps {
  children: React.ReactNode;
}

const ButtonPrimary: React.FC<IButtonPrimary> = ({
  children,
  ...rest
}: IButtonPrimary) => {
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
