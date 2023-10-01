import React, { useState } from "react";

const Counter = function () {
    const [likes, setLikes] = useState(0)

    function plus () {
        setLikes(likes + 1)
      }
    
    function minus () {
       setLikes(likes - 1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={plus}>plus</button>
            <button onClick={minus}>minus</button>
        </div>
    )
}

export default Counter;