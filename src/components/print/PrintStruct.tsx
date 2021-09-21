import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import Logo from "assets/icons/logo.png";
import "./styles.css";
import {
  currencyFormat,
  formatDate,
  getGrandTotal,
  getTotalItems,
} from "utils";
import { useAppSelector } from "hooks";

const Divider = () => <Box h="0.4px" bg="gray.600" w="full" my={2} />;

const PrintStruct: React.FC = () => {
  const cartSlice = useAppSelector((state) => state.cartSlice);
  const autSlice = useAppSelector((state) => state.authSlice);

  return (
    <Box width="264px" m="auto" className="print" px="15px">
      <Box textAlign="center" whiteSpace="pre-wrap">
        <Image
          src={Logo}
          height="40px"
          objectFit="cover"
          width="auto"
          mb={3}
          display="inline-block"
        />
        <Text>Sesukamu T-Shirt Printing</Text>
        <Text>
          Jl Bulak Jawa RT 003 RW 003 Kel. Jatisari, Kec. Jatiasih, Kota Bekasi
        </Text>
        <Text>+62 858-1716-6676</Text>
      </Box>
      <Box mt={4}>
        <Text>No: {cartSlice.trx_number}</Text>
        <Text>Kasir: {autSlice.name}</Text>
        <Text>Tanggal: {formatDate(cartSlice.transaction_date)}</Text>
        <Text>Customer: {cartSlice.customer_name}</Text>
      </Box>
      <Divider />
      {cartSlice.items.map((item, index) => (
        <>
          <Box key={index} mb={4}>
            <Text fontWeight="bold">{item.item_name}</Text>
            <Flex alignItems="center" justifyContent="space-between">
              <Text>
                {item.qty}x {currencyFormat(item.amount)}
              </Text>
              <Text fontWeight="bold">
                {currencyFormat(item.qty * item.amount)}
              </Text>
            </Flex>
          </Box>
          <Divider />
        </>
      ))}
      <Box mt={2}>
        <Flex alignItems="center" justifyContent="space-between" mb="2px">
          <Text>Subtotal</Text>
          <Text>{currencyFormat(getGrandTotal(cartSlice.items))}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mb="2px">
          <Text fontWeight="bold">
            TOTAL ({getTotalItems(cartSlice.items)} Barang)
          </Text>
          <Text fontWeight="bold">
            {currencyFormat(getGrandTotal(cartSlice.items))}
          </Text>
        </Flex>
      </Box>
      <Divider />
      <Box display="flex" flexDir="column" alignItems="center" mt={4}>
        <Flex alignItems="center">
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 448 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M224.1 141C160.5 141 109.2 192.3 109.2 255.9C109.2 319.5 160.5 370.8 224.1 370.8C287.7 370.8 339 319.5 339 255.9C339 192.3 287.7 141 224.1 141ZM224.1 330.6C183 330.6 149.4 297.1 149.4 255.9C149.4 214.7 182.9 181.2 224.1 181.2C265.3 181.2 298.8 214.7 298.8 255.9C298.8 297.1 265.2 330.6 224.1 330.6V330.6ZM370.5 136.3C370.5 151.2 358.5 163.1 343.7 163.1C328.8 163.1 316.9 151.1 316.9 136.3C316.9 121.5 328.9 109.5 343.7 109.5C358.5 109.5 370.5 121.5 370.5 136.3ZM446.6 163.5C444.9 127.6 436.7 95.8 410.4 69.6C384.2 43.4 352.4 35.2 316.5 33.4C279.5 31.3 168.6 31.3 131.6 33.4C95.8 35.1 64 43.3 37.7 69.5C11.4 95.7 3.29999 127.5 1.49999 163.4C-0.600012 200.4 -0.600012 311.3 1.49999 348.3C3.19999 384.2 11.4 416 37.7 442.2C64 468.4 95.7 476.6 131.6 478.4C168.6 480.5 279.5 480.5 316.5 478.4C352.4 476.7 384.2 468.5 410.4 442.2C436.6 416 444.8 384.2 446.6 348.3C448.7 311.3 448.7 200.5 446.6 163.5V163.5ZM398.8 388C391 407.6 375.9 422.7 356.2 430.6C326.7 442.3 256.7 439.6 224.1 439.6C191.5 439.6 121.4 442.2 92 430.6C72.4 422.8 57.3 407.7 49.4 388C37.7 358.5 40.4 288.5 40.4 255.9C40.4 223.3 37.8 153.2 49.4 123.8C57.2 104.2 72.3 89.1 92 81.2C121.5 69.5 191.5 72.2 224.1 72.2C256.7 72.2 326.8 69.6 356.2 81.2C375.8 89 390.9 104.1 398.8 123.8C410.5 153.3 407.8 223.3 407.8 255.9C407.8 288.5 410.5 358.6 398.8 388Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="448" height="512" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Text ml={1}>@kaos_sesukamu</Text>
        </Flex>
        <Text mt="2px">Terimakasih telah berbelanja ditoko kami.</Text>
      </Box>
    </Box>
  );
};
export default PrintStruct;
