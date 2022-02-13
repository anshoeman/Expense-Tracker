import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction=>transaction.amount);
    const total = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    console.log(amount);
    const Income = amount.filter(item=>item>0).reduce((acc,item)=>acc+=item,0).toFixed(2)
    const expense = amount.filter(item=>item<0).reduce((acc,item)=>acc+=item,0).toFixed(2)

  return (
    <div>
        <h1>{total}</h1>
        <h2>Expense:{Math.abs(expense)}</h2>
        <h2>Income:{Income}</h2>
    </div>
  )
}

export default IncomeExpense