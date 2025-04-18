import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState';

function ExpenseChart() {
    const {transactions} = useGlobalState()

    const validTransactions = transactions.filter(transaction => transaction.amount && transaction.amount !== 0);

    if (validTransactions.length === 0) {
        return null;
    }

    const totalIncome = transactions.filter(transaction =>
        transaction.amount > 0)
        .reduce((acc,transaction) => (acc += transaction.amount), 0);
    
    const totalExpenses = transactions.filter(transaction =>
        transaction.amount < 0) 
        .reduce((acc,transaction) => (acc += transaction.amount), 0)
        * -1;  
    
    const totalExpensePercentage = Math.round(
        (totalExpenses/ totalIncome) * 100);    
    
    const totalIncomePercentage = 100 - totalExpensePercentage;
    
    return (
        <VictoryPie
        colorScale={["#e74c3c","#2ecc71"]}
            data={[
                { x: "Expenses", y: totalExpensePercentage },
                { x: "Incomes", y: totalIncomePercentage },
            ]}
            animate={{
                duration: 200
            }}
            labels={({datum}) => `${datum.y}%`}
            labelComponent={<VictoryLabel
                agle={45}
                style={{
                    fill: "white",
                }}
            />}
        />


    );
}

export default ExpenseChart
