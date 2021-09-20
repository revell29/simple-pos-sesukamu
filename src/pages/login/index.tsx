import React from "react";
import { LoginContainer, LoginForm } from "components";
import { Box, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { supabase } from "service/supabase/connection";

const Login: React.FC = () => {
  const history = useHistory();

  const checkToken = React.useCallback(() => {
    const session = supabase.auth.session();
    if (session) {
      history.push("/sales");
    }
  }, [history]);

  React.useEffect(() => {
    checkToken();
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
