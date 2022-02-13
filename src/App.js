import React from 'react'
import AddTransaction from './components/AddTransaction';
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import {GlobalProvider} from './Context/GlobalState'
function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header/>
      <IncomeExpense/>
      <AddTransaction/>
      <TransactionList/>
      </GlobalProvider>
    </div>
  );
}

export default App;
