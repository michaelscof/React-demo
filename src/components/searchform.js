import React,{Component} from 'react';

export class SearchForm extends Component{
    constructor(){
        super();
        this.state={
            users:[],
            user:{fName:'',
            age:0,
            gender:''}
        };
        this.updateModel=this.updateModel.bind(this);
    }
    render(){
        return(
        <div>
            <input name="fName" value={this.state.user.fName} onChange={this.updateModel}></input>
            <input name="age" value={this.state.user.age} onChange={this.updateModel}></input>
            <input type="radio" name="gender" value="male" onChange={this.updateModel}/>male
            <input type="radio" name="gender" value="female" onChange={this.updateModel}/>female
            <button onClick={(event)=>{
                this.state.users.push(this.state.user);
                this.setState({
                    users:this.state.users  
                })
            }}>Search</button>
            <ol>
               { 
                this.state.users.map((user)=>
                <li>{user.fName},{user.age},{user.gender}</li>)
               }
            </ol>
        </div>
        );
    }

    updateModel(event){
        this.setState({
            user:Object.assign({},this.state.user,{[event.target.name]:event.target.value})
        });        
    }
}