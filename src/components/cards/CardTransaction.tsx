import React from "react";
import { Card } from "components";
import { Avatar, Flex, Heading, Box, Text } from "@chakra-ui/react";
import { ITransaction } from "types/transaction.type";
import { currencyFormat, formatDate } from "utils";

interface ICardTransactionProps {
  transaction: ITransaction;
}

const CardTransaction: React.FC<ICardTransactionProps> = (
  props: ICardTransactionProps
) => {
  const { transaction } = props;
  return (
    <Card
      _hover={{
        boxShadow: "md",
        cursor: "pointer",
      }}
      mb={4}
    >
      <Flex
        flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
        alignItems={{ base: "none", sm: "none" }}
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Box bg="gray.100" mr={6} p={3} rounded="lg">
            <Avatar
              name={transaction.customer_name}
              src={transaction.customer_name}
            />
          </Box>
          <Box>
            <Heading fontSize="17px">{transaction.trx_number}</Heading>
            <Text fontSize="14px" color="gray.500">
              {formatDate(transaction.transaction_date)}
            </Text>
            <Text color="gray.500" mt={1}>
              {transaction.customer_name}
            </Text>
          </Box>
        </Flex>

        <Heading
          fontSize="15px"
          color="teal.400"
          fontWeight="bold"
          mt={{ base: 2, sm: 2, lg: 0 }}
          textAlign={{ base: "right", sm: "right", lg: "right" }}
        >
          {currencyFormat(transaction.grand_total)}
        </Heading>
      </Flex>
    </Card>
  );
};

export default CardTransaction;
