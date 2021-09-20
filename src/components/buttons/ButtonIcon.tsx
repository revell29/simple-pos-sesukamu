import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface IButtonIcon extends ButtonProps {
  children: React.ReactNode;
}

const ButtonIcon: React.FC<IButtonIcon> = ({
  children,
  ...rest
}: IButtonIcon) => {
  return (
    <Button {...rest} w="full" size="md" variant="solid" py={6}>
      {children}
    </Button>
  );
};

export default ButtonIcon;
