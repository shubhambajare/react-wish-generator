import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const MessageCard = (props) => {
    return (
        <div className='m-5 ws-display-inline-block ws-message-card-wrapper'>

            <Card body className='p-4 mt-3 ws-message-card'>{props.message}</Card>
            <div className="mt-3">
                <Button variant="outline-success" style={{ marginRight: '10px' }} onClick={props.changeMessage}>
                    <span >
                        Change Message
                    </span>
                </Button>
                <Button variant="outline-warning" onClick={() => props.generateNewMessage(false)}>
                    <span  >
                        Generate New Message
                    </span>
                </Button>
            </div>

        </div>
    )
}
export default MessageCard