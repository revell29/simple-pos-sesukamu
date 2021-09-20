import React from "react";
import { Box } from "@chakra-ui/react";
import ApiRequest from "service/api";
import { useAppDispatch } from "hooks";
import { saveUserInfo } from "redux/auth/authSlice";
import { Navbar } from "components";
import { supabase } from "service/supabase/connection";

interface IAuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<IAuthContainerProps> = ({
  children,
}: IAuthContainerProps) => {
  const dispatch = useAppDispatch();

  const getInfo = React.useCallback(
    async (token) => {
      await ApiRequest.getUserInfo(token)
        .then((res) => {
          dispatch(saveUserInfo(res));
        })
        .catch((err) => {
          throw err;
        });
    },
    [dispatch]
  );

  React.useEffect(() => {
    const session = supabase.auth.session();
    if (session) {
      getInfo(session?.provider_token);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Box mt="1rem">{children}</Box>
    </>
  );
};

export default AuthContainer;
