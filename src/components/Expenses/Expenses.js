import React, { useState } from 'react';
import ExpensesList from './ExpensesList.js';
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses({ expensesItems }) {
  const [year, setYear] = useState('2021');

  const onYearSelectHandler = (selectedYear) => {
    setYear(selectedYear);
  }

  const filteredExpenses = expensesItems.filter(
    expenseItem => expenseItem.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter defaultYear={year} onYearSelect={onYearSelectHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;