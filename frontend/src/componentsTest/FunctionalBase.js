import React, { useState } from "react";

function CounterFunction() {
    let [x, setNo] = useState(0)

    function incre() {
        setNo(
            x = x+1
        )
    }

    return (
        <div>
            <hr /><br />
            <h3>Functional-base component example</h3>
            <h2>Counter = {x}</h2>
            <button onClick={incre}>Click Me</button>
            <br /><br /><br /><hr />
        </div>
    )
}

export default CounterFunction;