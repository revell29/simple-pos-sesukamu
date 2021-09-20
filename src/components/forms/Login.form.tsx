import React from "react";
import { FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import { Card } from "components";
import { ButtonPrimary, ButtonIcon } from "components";
import GoogleIcon from "assets/icons/ic_google.svg";
import { supabase } from "service/supabase/connection";

const LoginForm: React.FC = () => {
  const handleLogin = async () => {
    await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        redirectTo: "http://localhost:3000/sales",
      }
    );
  };

  return (
    <Card boxShadow="sm">
      <FormControl mb={8}>
        <FormLabel>Email</FormLabel>
        <Input variant="filled" />
      </FormControl>
      <FormControl mb={8}>
        <FormLabel>Password</FormLabel>
        <Input variant="filled" type="password" />
      </FormControl>
      <ButtonPrimary mb={3}>Masuk</ButtonPrimary>
      {/* <LoginSocialGoogle
        client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onResolve={({ data }: any) => onSuccessLogin(data)}
        onReject={(err: any) => alert(err)}
      > */}
      <ButtonIcon
        bg="gray.700"
        color="white"
        onClick={handleLogin}
        leftIcon={<Image src={GoogleIcon} boxSize="20px" />}
      >
        Masuk / Daftar
      </ButtonIcon>
      {/* </LoginSocialGoogle> */}
    </Card>
  );
};

export default LoginForm;
