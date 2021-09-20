import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface IScreenContainerProps extends BoxProps {
  children: React.ReactNode;
}

const ScreenContainer: React.FC<IScreenContainerProps> = ({
  children,
  ...rest
}: IScreenContainerProps) => {
  return (
    <Box
      maxW={{ base: "full", sm: "full", md: "full", lg: "60rem" }}
      px={4}
      margin="auto"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ScreenContainer;
