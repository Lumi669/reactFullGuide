import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  // pass this function to child component ExpenseForm to get user input data from there.
  //Upon receiving data, give it an id, then pass to parent component by calling function got from parent as props
  const saveExpenseDataHandler = (entereddExpenseData) => {
    const expenseData = {
      ...entereddExpenseData, //data from child component ExpenseForm.js
      id: Math.random().toString(), // add id attribut to data
    };

    //transfer data up to parent component App.js
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* note here not saveExpenseDataHandler(), because now just is passing a pointer through the onSaveExpenseData prop. And the function will be executed in child component to collect data from there */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
