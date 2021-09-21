import React from "react";
import {
  Flex,
  Heading,
  Spacer,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
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
      </Flex>
      <Spacer />
      <Flex alignItems="center" fontSize="15px">
        <Text color="gray.600" fontWeight="500" mr={3}>
          {authInfo.name}
        </Text>
        <Menu>
          <MenuButton>
            <Image src={authInfo.picture} boxSize="28px" rounded="full" />
          </MenuButton>
          <MenuList minH="48px" border="0" boxShadow="md">
            <MenuItem>Retur (Coming Soon)</MenuItem>
            <MenuItem
              as="button"
              onClick={() => {
                supabase.auth.signOut();
                window.location.href = "/";
              }}
            >
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default React.memo(Navbar);
