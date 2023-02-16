import React from 'react'

function Button(props) {
    return (
        <button className="button" id={props.id} type={props.type} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button