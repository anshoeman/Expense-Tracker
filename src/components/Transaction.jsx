import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
const Transaction = ({transaction}) => {
    const sign = transaction.amount<0?'-':'';
    const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div>
        <h1>{transaction.text}</h1>
        <h2>{sign}{Math.abs(transaction.amount)}</h2>
        <button onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
    </div>
  )
}

export default Transaction