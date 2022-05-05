import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

/*
Note: use props as parameter of function ExpenseItem
1. props is an atribute of customElement of ExpenseItem
2. props stands for properties and is an object of  key-value pairs and in this case {date: xxx, tite: xxx, amount: xxx}
3. Here in the function ExpenseItem, if change param from props to (date, title, amount), the program crashed!!!!!!
*/
