import React , {createContext,useContext,useReducer} from 'react'
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        {id:1,text:'flower',amount:-20},
        {id:2,text:'salary',amount:3000},
        {id:3,text:'date',amount:-20},
        {id:4,text:'book',amount:-20}
    ]
}

export const GlobalContext = createContext(initialState);

//make the provider

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    //action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }
    return(
        <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}