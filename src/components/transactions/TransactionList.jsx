import React from 'react'
import { useGlobalState } from '../../context/GlobalState'
import {TransactionItem} from './TransactionItem'

function TransactionList() {
    const {transactions} = useGlobalState();
    return (
        <>
            <h3 className=' text-slate-300 text-xl font-bold 
            w-full py-5'>History</h3>

            <ul>
                {transactions.map(transaction =>(
                    <TransactionItem transaction ={transaction} key =
                    {transaction.id} />     
                ))}   
            </ul>
           
        </>
        
    )
}

export default TransactionList
