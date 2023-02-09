import React, { Component } from "react";
import { withRouter } from "react-router-dom";





class EditAccount extends Component{

state={
    account:{
        id:"",
        name:"",
        lastName:"",
        phone:"",
        email:""
    }
}

componentDidMount(){

    
    const accountForEdit = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0];
 
    this.setState({account:accountForEdit})
}
changeAccount=(event)=>{
    const copyOfAccount = {...this.state.account};
    copyOfAccount[event.target.id] = event.target.value;
    this.setState({account:copyOfAccount})
}
editAccount=()=>{
    this.props.editAccount(this.state.account);
    this.props.history.push("/");
}
    render(){
        return(
            <div className="containder py-4">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h3 className="display-4 m-4">Edit Account</h3>
                        <div className="row">
                            <div className="col-8 offset-1">
                                <input onChange={this.changeAccount}   type="text" id="name" className="form-control" value={this.state.account.name}/><br />
                                <input onChange={this.changeAccount}  type="text" id="lastname"  className="form-control" value={this.state.account.lastname}/><br />
                                <input onChange={this.changeAccount}  type="text" id="phone"  className="form-control" value={this.state.account.phone}/><br />
                                <input onChange={this.changeAccount}  type="text" id="email"  className="form-control" value={this.state.account.email}/><br />
                                <br />
                                <button onClick={this.editAccount}  className="btn btn-info form-control">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default withRouter(EditAccount);