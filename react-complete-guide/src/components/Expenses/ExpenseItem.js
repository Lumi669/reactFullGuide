import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("apple");
  const clickHandler = () => {
    setTitle("Updatppppped");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>bbn</button>
    </Card>
  );
};

export default ExpenseItem;

/*
Note: 
useState: 
1. Used only directly inside component function, not in nested function
2. the state only works inside this component, not other component.
3. IMPORTANT !!! when we say the this component, means the specific component instance created. for example, if this ExpenseItem component is repeatedly used 4 times, then each time the ExpenseItem coponent is considered one component instance. The 1st is different from the 2nd, 3rd and 4th ExpenseItem components. The state in the 1st ExpenseItem component istance is confined only to the 1st ExpenseItem component instance, not other 3.

Every instance receives its own state, and which is detached from other 3 instances.
*/
