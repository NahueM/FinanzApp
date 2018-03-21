import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses.js';


const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                startAddExpense(expense, props.dispatch)
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);