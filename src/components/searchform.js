import React, { Component } from 'react';
import * as useractions from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class SearchForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            user: {
                fName: '',
                age: 0,
                gender: ''
            }
        };
        this.sortCounter = true;
        this.updateModel = this.updateModel.bind(this);
    }
    render() {
        return (
            <div>
                <input name="fName" value={this.state.user.fName} onChange={this.updateModel}></input>
                <input name="age" value={this.state.user.age} onChange={this.updateModel}></input>
                <input type="radio" name="gender" value="male" onChange={this.updateModel} />male
                <input type="radio" name="gender" value="female" onChange={this.updateModel} />female
                <button onClick={() => {
                    this.props.actions.saveAction(this.state.user);
                    this.setState({});
                    // this.state.users.push(this.state.user);
                    // this.changeUsersState();
                }}>Search</button>
                <button onClick={() => {
                    this.props.users.sort((user1, user2) => this.sortCounter ? user1.age - user2.age : user2.age - user1.age);
                    this.sortCounter = !this.sortCounter;
                    this.setState({});
                  //  this.changeUsersState();
                }}>Sort</button>
                {/* <Counter count={this.state.users.length}></Counter> */}
                <ol>
                    {
                        this.props.users.map((user, index) =>
                            <li>{user.fName},{user.age},{user.gender}{<button onClick={() => {
                                this.props.users.splice(index, 1);
                                this.setState({});
                              //  this.changeUsersState();
                            }}>Delete</button>
                        }</li>)
                    }
                </ol>
            </div>
        );
    }

   /* changeUsersState() {
        this.setState({
            users: this.props.users
        })
    }*/

    updateModel(event) {
        this.setState({
            user: Object.assign({}, this.state.user, { [event.target.name]: event.target.value })
        });
    }
}

function mapDispatchToProps(dispatch){
    console.log(useractions);
    return{
        actions:bindActionCreators(
            useractions,dispatch)
    };
}

function mapReduxStateToProps(reduxState){
    console.log('mapsStateToProps',reduxState);
    return{
        users:reduxState.users
    };
}


export default connect(mapReduxStateToProps,mapDispatchToProps)(SearchForm);