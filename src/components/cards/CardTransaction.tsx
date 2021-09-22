import React from "react";
import { Card } from "components";
import { Avatar, Flex, Heading, Box, Text, Button } from "@chakra-ui/react";
import { ITransaction } from "types/transaction.type";
import { currencyFormat, formatDate } from "utils";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "components/print/ComponentToPrint";
import { useAppDispatch } from "hooks";
import { clearItems, printTransaction } from "redux/cart/cartSlice";

interface ICardTransactionProps {
  transaction: ITransaction;
}

const CardTransaction: React.FC<ICardTransactionProps> = (
  props: ICardTransactionProps
) => {
  const { transaction } = props;
  const componentRef = React.useRef(null);
  const dispatch = useAppDispatch();

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const printTrigger = React.useCallback(() => {
    return (
      <Button w="full" mt={4}>
        Print
      </Button>
    );
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        dispatch(printTransaction(transaction));
        resolve();
      }, 2000);
    });
  }, []);

  const handleAfterPrint = React.useCallback(() => {
    dispatch(clearItems());
  }, [dispatch]);
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
            <Heading fontSize="13px">{transaction.trx_number}</Heading>
            <Text fontSize="13px" color="gray.500">
              {formatDate(transaction.transaction_date)}
            </Text>
            <Text color="gray.500" fontSize="13px" mt={1}>
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
      <ReactToPrint
        trigger={printTrigger}
        content={reactToPrintContent}
        onBeforeGetContent={handleOnBeforeGetContent}
        onAfterPrint={handleAfterPrint}
      />
      <Box display="none">
        <ComponentToPrint ref={componentRef} />
      </Box>
    </Card>
  );
};

export default CardTransaction;
