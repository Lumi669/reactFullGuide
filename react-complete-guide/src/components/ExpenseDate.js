//redering date

function ExpenseDate(props) {
  //output date to human readable format, seperate d, m and y
  //here month = proprs.date....., because in parent component date={props.date},
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      {props.date.toISOString()}
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
