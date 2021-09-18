import React from "react";
import { Flex } from "@chakra-ui/react";

type LoginContainerProps = {
  children: React.ReactNode;
};

const LoginContainer: React.FC<LoginContainerProps> = ({
  children,
}: LoginContainerProps) => {
  return (
    <Flex
      maxH="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      maxW="32rem"
      margin="auto"
      w="full"
    >
      {children}
    </Flex>
  );
};

export default LoginContainer;
