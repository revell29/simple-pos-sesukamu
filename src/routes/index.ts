import { SalesPage, TransactionPage } from "pages";

const allRoutes = [
  {
    path: "/sales",
    component: SalesPage,
    auth: true,
  },
  {
    path: "/sales/transaction",
    component: TransactionPage,
    auth: true,
  },
];

export default allRoutes;
