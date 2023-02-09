import React, { Component } from "react";
import Header from "./Components/Header/Header";
import {Switch, Route, BrowserRouter } from "react-router-dom";
import AccountsTable from "./Components/AccountsTable/AccountsTable";
import Addaccount from "./Components/AddAccount/AddAccount";
import EditTable from "./Components/EditTable/EditTable";
import EditAccount from "./Components/EditAccount/EditAccount";

class App extends Component{
    state ={
        accounts : [
            {id:1, name:"Nemanja", lastname:"Vasilijeivc",phone:"11-11-11-11",email:"Nemanja@test.com"},
            {id:2, name:"Petar", lastname:"vesic",phone:"22-22-22-22",email:"Petar@test.com"}
        ]
    }

    addNewAccountToState=(acc)=>{
        this.setState({
            accounts:[...this.state.accounts,acc]
        })
    }

    deleteAccount = (id)=>{
        const accountsCopy = [...this.state.accounts];
        const newCopyAccount = accountsCopy.filter(account=> account.id !== id);
        this.setState({accounts:newCopyAccount})
    }

editAccount= (acc)=>{
    const copyAccounts = [...this.state.accounts];
    let accountPossition = copyAccounts.map(account =>account.id).indexOf(acc.id)
    copyAccounts[accountPossition]= acc;
    this.setState({accounts:copyAccounts})
}

    render(){
        return(
            <BrowserRouter>
            <Header/>
               <Route path="/" exact ><AccountsTable accounts={this.state.accounts}/></Route>
               <Route path="/add" ><Addaccount addNewAccountToState={this.addNewAccountToState} /></Route>  
                <Switch>
                <Route path="/edit/:id" ><EditAccount accounts={this.state.accounts} editAccount={this.editAccount}/></Route> 
                <Route path="/edit" ><EditTable accounts={this.state.accounts} deleteAccount={this.deleteAccount}/></Route>
                </Switch>
            </BrowserRouter>
            
        )
    }
}

export default App;