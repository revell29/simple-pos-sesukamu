import React from "react";
import { LoginContainer, LoginForm } from "components";
import { Box, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const history = useHistory();
  const token = sessionStorage.getItem("token");

  const checkToken = React.useCallback(() => {
    if (token) {
      history.push("/sales");
    }
  }, [token, history]);

  React.useEffect(() => {
    let mounted = true;

    checkToken();
    return () => {
      mounted = false;
    };
  }, [checkToken]);

  return (
    <LoginContainer>
      <Box w="full" mx={2} textAlign="center">
        <Heading mb={5} color="gray.600">
          Sesukamu Printing
        </Heading>
        <LoginForm />
      </Box>
    </LoginContainer>
  );
};

export default Login;
