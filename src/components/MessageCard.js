import React from 'react'
import Card from 'react-bootstrap/Card';

const MessageCard = (props) => {
    return (
        <div className='m-5 ws-display-inline-block'>
            <Card body className='p-4 ws-message-card'>{props.message}</Card>
        </div>
    )
}
export default MessageCard