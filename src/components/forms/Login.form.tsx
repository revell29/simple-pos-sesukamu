import React from "react";
import { FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import { Card } from "components";
import { ButtonPrimary, ButtonIcon } from "components";
import GoogleIcon from "assets/icons/ic_google.svg";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useHistory } from "react-router-dom";

const LoginForm: React.FC = () => {
  const history = useHistory();

  const onSuccessLogin = (res: any) => {
    sessionStorage.setItem("token", res.data.access_token);
    history.push("/sales");
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
      <LoginSocialGoogle
        client_id="4178028362-lci2afd48a0nhh5t2s2jn6lfh15jubjj.apps.googleusercontent.com"
        onResolve={({ data }: any) => onSuccessLogin(data)}
        onReject={(err: any) => alert(err)}
      >
        <ButtonIcon
          bg="gray.700"
          color="white"
          leftIcon={<Image src={GoogleIcon} boxSize="20px" />}
        >
          Masuk / Daftar
        </ButtonIcon>
      </LoginSocialGoogle>
    </Card>
  );
};

export default LoginForm;
