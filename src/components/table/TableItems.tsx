import React from "react";
import {
  Button,
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "hooks";
import { ItemCartType } from "types/cart.type";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { currencyFormat, generateNumber } from "utils";
import { addItems, deleteItems } from "redux/cart/cartSlice";
import { Card } from "components";
import { CloseIcon } from "@chakra-ui/icons";

const TableItem: React.FC = () => {
  const initialState = {
    item_id: generateNumber(),
    item_name: "",
    qty: 0,
    amount: 0,
  };
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const cartSlice = useAppSelector((state) => state.cartSlice);
  const [items, setItems] = React.useState<ItemCartType>(initialState);

  const addItem = () => {
    if (items.item_name !== "") {
      setOpen(false);
      dispatch(addItems(items));
      setItems(initialState);
    }
  };

  return (
    <>
      <Box mt={6} textAlign="right">
        <Button onClick={() => setOpen(true)} variant="ghost" mr={2} size="sm">
          Tambah Item
        </Button>
      </Box>
      <Box mt={4}>
        {cartSlice.items.length > 0 &&
          cartSlice.items.map((item, index) => (
            <Card key={index} boxShadow="md" mb={3}>
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text fontSize="15px" color="gray.600" fontWeight="600">
                    {item.item_name}
                  </Text>
                  <Text fontSize="13px" color="gray.600">
                    x{item.qty}
                  </Text>
                </Box>
                <Flex alignItems="center">
                  <Text fontSize="13px" color="gray.600">
                    {currencyFormat(item.amount)}
                    <Button
                      ml={4}
                      size="xs"
                      bg="red.50"
                      onClick={() => dispatch(deleteItems(`${item.item_id}`))}
                    >
                      <CloseIcon color="red.500" />
                    </Button>
                  </Text>
                </Flex>
              </Flex>
            </Card>
          ))}
      </Box>
      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <Box p={4}>
          <FormControl mb={4}>
            <FormLabel>Nama Item</FormLabel>
            <Input
              onChange={(e) =>
                setItems({ ...items, item_name: e.target.value })
              }
              value={items.item_name}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Qty</FormLabel>
            <Input
              placeholder="Quantity"
              onChange={(e) =>
                setItems({ ...items, qty: Number(e.target.value) })
              }
              value={items.qty}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Total</FormLabel>
            <Input
              placeholder="Total"
              onChange={(e) =>
                setItems({ ...items, amount: Number(e.target.value) })
              }
              value={items.amount}
            />
          </FormControl>
          <Button w="full" variant="primary" onClick={addItem}>
            Tambah
          </Button>
        </Box>
      </BottomSheet>
    </>
  );
};

export default TableItem;
