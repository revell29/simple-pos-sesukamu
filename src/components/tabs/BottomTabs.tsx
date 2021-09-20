import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { currencyFormat } from "utils";

interface BottomTabsProps {
  total: number;
}

const BottomTabs: React.FC<BottomTabsProps> = (props: BottomTabsProps) => {
  const { total } = props;
  return (
    <Box
      position="fixed"
      bottom={0}
      bg="white"
      left="0"
      w="full"
      py={4}
      px={4}
      borderTop="2px"
      borderColor="gray.100"
      boxShadow="lg"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="16px" fontWeight="600">
          Grand Total
        </Text>
        <Text fontSize="16px" fontWeight="600">
          {currencyFormat(total)}
        </Text>
      </Flex>
    </Box>
  );
};

export default BottomTabs;
