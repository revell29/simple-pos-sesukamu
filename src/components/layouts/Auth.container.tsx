import React from "react";
import { Box } from "@chakra-ui/react";
import ApiRequest from "api";
import { useAppDispatch } from "hooks";
import { saveUserInfo } from "redux/auth/authSlice";
import { Navbar } from "components";

const AuthContainer: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getInfo = async () => {
      await ApiRequest.getUserInfo()
        .then((res) => {
          dispatch(saveUserInfo(res));
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getInfo();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box mx="auto" px="3.5rem" mt="2rem">
        {children}
      </Box>
    </>
  );
};

export default AuthContainer;
