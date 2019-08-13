import React from "react"

const Button = props => {
    return (
        <button><Heart />{props.children} </button>
    )
}
const Heart = props => {
    return (
        <span>&hearts;</span>
    )
}

export default Button;