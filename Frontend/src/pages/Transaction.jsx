import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { Card, CardContent } from "@/components/ui/card";
import { useTransactions } from "../context/TransactionContext";

const Transaction = () => {
  const { transactions } = useTransactions();

  const balance = transactions.reduce((acc, item) => {
    return item.type === "expense"
      ? acc - Number(item.amount)
      : acc + Number(item.amount);
  }, 0);

  return (
    <div>
      <div className="main-container">
        <h2 className="sub-heading-large">Your Transactions</h2>
        <Card>
          <CardContent style={{ padding: "24px" }}>
            <div className="main-container">
              <span className="sub-heading-small">Current Balance</span>
              <span
                className="sub-heading-medium"
                style={{ color: balance >= 0 ? "green" : "red" }}
              >
                ₹ {balance.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <TransactionForm/>
      <TransactionList/>
    </div>
  );
};

export default Transaction;
