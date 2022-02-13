import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState';
const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random()*100000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button>Add Trasaction</button>
        </form>
    </div>
  )
}

export default AddTransaction