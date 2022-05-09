import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = () => {
  // pass this function to child component ExpenseForm to get user input data from there.
  const saveExpenseDataHandler = (entereddExpenseData) => {
    const expenseData = {
      ...entereddExpenseData,
      id: Math.random().toString(),
    };
    console.log("from new expenses :", expenseData);
  };

  return (
    <div className="new-expense">
      {/* note here not saveExpenseDataHandler(), because now just is passing a pointer through the onSaveExpenseData prop. And the function will be executed in child component to collect data from there */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
