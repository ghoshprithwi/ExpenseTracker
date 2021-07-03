import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.trunc(Math.random() * 100).toString()
    };
    props.onAddExpense(expenseData);
  }

  const showExpenseForm = () => {
    setIsEditing(true)
  }
  const hideExpenseForm = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelButtonClick={hideExpenseForm} />
      ) : (
        <div>
          <button onClick={showExpenseForm}>Add New Expense</button>
        </div >
      )}
    </div>
  );
}

export default NewExpense;