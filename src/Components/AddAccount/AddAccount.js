import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Addaccount extends Component{

    
    state={
        newAccount:{
            id:"",name:"",lastname:"",phone:"",email:""
        }
    }


    changeHandler = (event)=>{
        let id = event.target.id;
        let newAccountcopy = {...this.state.newAccount};
        newAccountcopy[id]=event.target.value;
        this.setState({newAccount:newAccountcopy})
       
    }

   
    AddNewAccount = ()=>{
        this.props.addNewAccountToState(this.state.newAccount);
        this.props.history.push("/");
    }
    render(){
        return(
            <div className="containder py-4">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h3 className="display-4 m-4">Add Account</h3>
                        <div className="row">
                            <div className="col-8 offset-1">
                                <input onChange={this.changeHandler}  type="text" id="id" placeholder="id" className="form-control" /><br />
                                <input onChange={this.changeHandler}  type="text" id="name" placeholder="name" className="form-control" /><br />
                                <input onChange={this.changeHandler}  type="text" id="lastname" placeholder="lastname" className="form-control" /><br />
                                <input onChange={this.changeHandler}  type="text" id="phone" placeholder="phone" className="form-control" /><br />
                                <input onChange={this.changeHandler}  type="text" id="email" placeholder="email" className="form-control" /><br />
                                <br />
                                <button onClick={this.AddNewAccount} className="btn btn-primary form-control">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter (Addaccount);

