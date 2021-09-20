import React from "react";
import {
  Flex,
  Heading,
  Text,
  Link,
  Spacer,
  Image,
  Button,
} from "@chakra-ui/react";
import { useAppSelector } from "hooks";
import { supabase } from "service/supabase/connection";

const Navbar: React.FC = () => {
  const authInfo = useAppSelector((state) => state.authSlice);
  return (
    <Flex
      h={{ base: "4rem", lg: "5rem" }}
      alignItems="center"
      px={{ base: "1rem", lg: "3.5rem" }}
    >
      <Flex alignItems="center" fontSize="15px">
        <Heading fontSize="20px" color="gray.700">
          Sesukamu
        </Heading>
        {/* <Text mx={2}>/</Text>
        <Text color="gray.600" fontWeight="500">
          {authInfo.name}
        </Text> */}
      </Flex>
      <Spacer />
      <Flex alignItems="center" fontSize="15px">
        <Button
          onClick={() => {
            supabase.auth.signOut();
            window.location.href = "/";
          }}
          size="sm"
        >
          <Text>Sign Out</Text>
        </Button>
        <Link to="/" ml={8}>
          <Image src={authInfo.picture} boxSize="28px" rounded="full" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default React.memo(Navbar);
