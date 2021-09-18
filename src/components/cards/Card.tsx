import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const Card: React.FC<BoxProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Box px={8} py={10} rounded="15px" bg="white" {...rest} w="full">
      {children}
    </Box>
  );
};

export default Card;
