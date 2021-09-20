import { ItemCartType } from "types/cart.type";

export function currencyFormat(num = 0): string {
  const amount = Number(num);
  return "Rp " + amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function getGrandTotal(cart: Array<ItemCartType>): number {
  const result = cart.reduce(
    (prevValue, currentValue) => prevValue + currentValue.amount,
    0
  );
  return result;
}

export function generateNumber(): string {
  const trxNumber = Date.now() + (Math.random() * 100).toFixed();
  return trxNumber;
}

export const formatDate = (UTC_Date: string): string => {
  const localDate = new Date(UTC_Date);
  const objToday = localDate,
    dayOfMonth =
      objToday.getDate() < 10 ? "0" + objToday.getDate() : objToday.getDate(),
    curMonth =
      objToday.getMonth() + 1 < 10
        ? "0" + (objToday.getMonth() + 1)
        : objToday.getMonth() + 1,
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours(),
    curMinute =
      objToday.getMinutes() < 10
        ? "0" + objToday.getMinutes()
        : objToday.getMinutes(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
  const today =
    curYear +
    "-" +
    curMonth +
    "-" +
    dayOfMonth +
    " " +
    curHour +
    ":" +
    curMinute +
    " " +
    curMeridiem;
  return today;
};
