import React ,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';
const TransactionList = () => {
    const context = useContext(GlobalContext);
    console.log(context)
    const {transactions} = context
  return (
    <div>
        {transactions.map(transaction=>{
                return(<Transaction key={transaction.id} transaction={transaction}/>)
            })}
    </div>
  )
}

export default TransactionList