import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface ICardProps extends BoxProps {
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { children, ...rest } = props;

  return (
    <Box
      px={{ base: 5, sm: 5, lg: 8 }}
      py={{ base: 5, sm: 5, lg: 10 }}
      rounded="8px"
      bg="white"
      {...rest}
      w="full"
    >
      {children}
    </Box>
  );
};

export default Card;
