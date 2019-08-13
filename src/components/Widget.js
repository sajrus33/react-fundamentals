import React from "react"

const Widget = props => {
    return (
        <input type="text" onChange={props.update} />
    )
}

export default Widget;