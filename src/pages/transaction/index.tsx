import { AddIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Link,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { BottomTabs, Card, ScreenContainer, TableItem } from "components";
import { Link as ReactLink, RouteComponentProps } from "react-router-dom";
import React from "react";
import transaction from "service/supabase/transaction";
import { generateNumber, getGrandTotal } from "utils";
import { useAppDispatch, useAppSelector } from "hooks";
import { useHistory } from "react-router-dom";
import { clearItems } from "redux/cart/cartSlice";

const TransactionPage: React.FC<RouteComponentProps> = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [customer, setCustomer] = React.useState<string>("");
  const cartSlice = useAppSelector((state) => state.cartSlice);
  const grandTotal = getGrandTotal(cartSlice.items);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const saveTransaction = async () => {
    try {
      setLoading(true);
      const payload = {
        trx_number: `INV-${generateNumber()}`,
        customer_name: customer,
        grand_total: getGrandTotal(cartSlice.items),
        is_paid: true,
        items: cartSlice.items.map((item) => {
          return {
            item_name: item.item_name,
            qty: item.qty,
            amount: item.amount,
          };
        }),
      };
      const data = await transaction.saveTransaction(payload);
      if (data) {
        history.push("/sales");
        dispatch(clearItems());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <Flex alignItems="center" justifyContent="space-between" mb={5}>
        <Link
          as={ReactLink}
          to="/sales"
          _hover={{ textDecor: "none" }}
          d="flex"
        >
          <ChevronLeftIcon fontSize="25px" />
          Kembali
        </Link>
        <Button
          border="1px"
          borderColor="gray.300"
          color="gray.600"
          rounded="10px"
          _hover={{ boxShadow: "md" }}
          leftIcon={<AddIcon color="gray.600" />}
          isLoading={isLoading}
          loadingText="Please wait."
          onClick={saveTransaction}
          disabled={cartSlice.items.length === 0 && customer === "" && true}
        >
          Simpan
        </Button>
      </Flex>
      <Card mb={20}>
        <FormControl>
          <FormLabel fontSize="15px" color="gray.600">
            Nama Customer
          </FormLabel>
          <Input
            variant="filled"
            onChange={(e) => setCustomer(e.target.value)}
            value={customer}
          />
        </FormControl>
        <TableItem />
      </Card>
      <BottomTabs total={grandTotal} />
    </ScreenContainer>
  );
};

export default TransactionPage;
