import { Flex, Heading, Text, Link, Spacer, Image } from "@chakra-ui/react";
import { useAppSelector } from "hooks";
import { Link as ReactLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const authInfo = useAppSelector((state) => state.authSlice);
  return (
    <Flex h="5rem" alignItems="center" px="3.5rem">
      <Flex alignItems="center" fontSize="15px">
        <Heading fontSize="20px" color="gray.700">
          Sesukamu
        </Heading>
        <Text mx={2}>/</Text>
        <Text color="gray.600" fontWeight="500">
          {authInfo.name}
        </Text>
      </Flex>
      <Spacer />
      <Flex alignItems="center" fontSize="15px">
        <Link to="/" as={ReactLink}>
          <Text>Penjualan</Text>
        </Link>
        <Link to="/" ml={8}>
          <Image src={authInfo.picture} boxSize="28px" rounded="full" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
