//Note NOT use import "./ExpenseItem"; should use import xxx from " xxx", import css file can be simplified version e.g import "./ExpenseDate.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const gotSelectOption = (selectedYear) => {
    console.log("from Expenses: ", selectedYear);
  };

  return (
    <div>
      <ExpensesFilter onSelected={gotSelectOption}>
        <Card className="expenses">
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          />
        </Card>
      </ExpensesFilter>
    </div>
  );
};

export default Expenses;
