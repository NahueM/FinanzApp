import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses.js';


const AddExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Agregar Gasto</h1>
                </div>
            </div>
            <div className="content-container" >
                <ExpenseForm
                    onSubmit={(expense) => {
                        props.dispatch(startAddExpense(expense, props.dispatch))
                        props.history.push('/');
                    }}
                />
            </div>
        </div>
    )
};

export default connect()(AddExpensePage);