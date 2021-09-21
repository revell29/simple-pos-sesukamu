import { ItemCartType } from "types/cart.type";

export function currencyFormat(num = 0): string {
  const amount = Number(num);
  return "Rp " + amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

/**
 * get grand_total from cart
 *
 * @param cart
 * @returns
 */
export function getGrandTotal(cart: Array<ItemCartType>): number {
  const result = cart.reduce(
    (prevValue, currentValue) => prevValue + currentValue.amount,
    0
  );
  return result;
}

/**
 * get total items in cart
 * @param cart
 * @returns
 */
export function getTotalItems(cart: Array<ItemCartType>): number {
  const result = cart.reduce(
    (prevValue, currentValue) => prevValue + currentValue.qty,
    0
  );
  return result;
}

/**
 * generate number for transaction number
 * @returns
 */
export function generateNumber(): string {
  const trxNumber = Date.now() + (Math.random() * 100).toFixed();
  return trxNumber;
}

/**
 * formating timestamptz
 *
 * @param UTC_Date
 * @returns
 */
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

/**
 * generate date to transaction number
 * @returns
 */
export function dateCode(): string {
  const dateObj = new Date();
  const monthDefault = dateObj.getUTCMonth() + 1; //months from 1-12
  const month = (monthDefault < 10 ? "0" : "") + monthDefault;
  const day = (dateObj.getUTCDate() < 10 ? "0" : "") + dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const now = year + "" + month + "" + day;
  return now;
}

export function timeTransaction(): string {
  const dateObj = new Date();
  const hours = (dateObj.getHours() < 10 ? "0" : "") + dateObj.getHours();
  const minutes = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();
  const second = (dateObj.getSeconds() < 10 ? "0" : "") + dateObj.getSeconds();
  const time = hours + "" + minutes + "" + second;
  return time;
}
