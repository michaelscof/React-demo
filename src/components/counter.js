import React from 'react';

//Component without define a class(only using a function)
//Never try to modify parent component in child component(hence we have passed only length)
const Counter = function (props) {
    return (
        <div>Counter:{props.count}</div>
    );
}

export default Counter;