import { CardTransaction, ScreenContainer, CardSkelton } from "components";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import transaction from "service/supabase/transaction";
import { ITransaction } from "types/transaction.type";

const SalesPage: React.FC<RouteComponentProps> = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [dataTransaction, setTransaction] = React.useState<ITransaction[]>([]);

  const fetchTransaction = async () => {
    try {
      setLoading(true);
      const data: ITransaction[] = await transaction.fetchTransaction();
      setTransaction(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <>
      <ScreenContainer>
        <Flex mb={5} alignItems="center" justifyContent="space-between">
          <Heading fontSize="17px" color="gray.600">
            Transaksi
          </Heading>
          <Button
            as={Link}
            to="/sales/transaction"
            border="1px"
            borderColor="gray.300"
            color="gray.600"
            rounded="10px"
            _hover={{ boxShadow: "md" }}
            leftIcon={<AddIcon color="gray.600" />}
          >
            Tambah
          </Button>
        </Flex>
        {!isLoading ? (
          dataTransaction &&
          dataTransaction.map(
            (
              transaction: ITransaction,
              index: React.Key | null | undefined
            ) => <CardTransaction key={index} transaction={transaction} />
          )
        ) : (
          <CardSkelton />
        )}
      </ScreenContainer>
    </>
  );
};
export default SalesPage;
