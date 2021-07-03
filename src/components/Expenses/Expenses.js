import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses({ expenses }) {
  const [year, setYear] = useState('');

  const onYearSelectHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
    console.log(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onYearSelect={onYearSelectHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;