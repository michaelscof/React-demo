import React,{Component} from 'react';
import Counter from './counter';

export class SearchForm extends Component{
    constructor(){
        super();
        this.state={
            users:[],
            user:{
            fName:'',
            age:0,
            gender:''
        }
        };
        this.sortCounter=true;
        this.updateModel=this.updateModel.bind(this);
    }
    render(){
        return(
        <div>
            <input name="fName" value={this.state.user.fName} onChange={this.updateModel}></input>
            <input name="age" value={this.state.user.age} onChange={this.updateModel}></input>
            <input type="radio" name="gender" value="male" onChange={this.updateModel}/>male
            <input type="radio" name="gender" value="female" onChange={this.updateModel}/>female
            <button onClick={()=>{
                this.state.users.push(this.state.user);
                this.changeUsersState();
            }}>Search</button>
            <button onClick={()=>{
                    this.state.users.sort((user1,user2)=>this.sortCounter?user1.age-user2.age:user2.age-user1.age);
                    this.sortCounter=!this.sortCounter;
                    this.changeUsersState();
            }}>Sort</button>
            <Counter count={this.state.users.length}></Counter>
            <ol>
               { 
                this.state.users.map((user,index)=>
                <li>{user.fName},{user.age},{user.gender}{<button onClick={()=>{
                    this.state.users.splice(index,1);
                    this.changeUsersState();
                }}>Delete</button>}</li>)
               }
            </ol>
        </div>
        );
    }

    changeUsersState(){
        this.setState({
            users:this.state.users
        })
    }

    updateModel(event){
        this.setState({
            user:Object.assign({},this.state.user,{[event.target.name]:event.target.value})
        });        
    }
}