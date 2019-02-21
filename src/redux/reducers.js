export default function reducers(state, action) {
    if (action.type === 'add') {
        console.log(state, action.user);
        if (action.user)
            state.users.push(action.user);
        return {
            users: state.users
        }
    }
    return state;
}