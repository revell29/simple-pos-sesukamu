import React from "react";
import { Box } from "@chakra-ui/react";
import ApiRequest from "service/api";
import { useAppDispatch, useAppSelector } from "hooks";
import { saveUserInfo } from "redux/auth/authSlice";
import { Navbar } from "components";

interface IAuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<IAuthContainerProps> = ({
  children,
}: IAuthContainerProps) => {
  const dispatch = useAppDispatch();
  const authSlice = useAppSelector((state) => state.authSlice);
  const SESSION_TOKEN = sessionStorage.getItem("token");

  const getInfo = React.useCallback(async () => {
    await ApiRequest.getUserInfo(SESSION_TOKEN)
      .then((res) => {
        dispatch(saveUserInfo(res));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          sessionStorage.removeItem("token");
          window.location.href = "/";
        }
      });
  }, [SESSION_TOKEN, dispatch]);

  React.useEffect(() => {
    if (!authSlice.name) {
      getInfo();
    }
  }, [getInfo, authSlice.name]);

  return (
    <>
      <Navbar />
      <Box mt="1rem">{children}</Box>
    </>
  );
};

export default AuthContainer;
