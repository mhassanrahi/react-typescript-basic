import React from 'react'

type GreetProps = {
    name: string,
    messageCount: number,
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            Hi {props.name}! You have {props.messageCount} unread messages.
        </div>
    )
}

export default Greet
