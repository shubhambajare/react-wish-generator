import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getBirthdayMessage from '../data/Birthday';
import getWeddingAnniversaryMessage from '../data/WeddingAnniversary';
import getDiwaliMessage from '../data/Diwali';
import { Button, Card } from 'react-bootstrap';

export default function DisplayMessage() {
    const { occasion, id, name } = useParams();
    const [message, setMessage] = useState('');

    const getMessage = () => {
        let messageObject;
        switch (occasion) {
            case "1":
                messageObject = getBirthdayMessage(id);
                break;
            case "2":
                messageObject = getWeddingAnniversaryMessage(id);
                break;
            case "3":
                messageObject = getDiwaliMessage(id);
                break;
        }
        setMessage(messageObject.startMessage + name + messageObject.endMessage);
    }

    useEffect(() => {
        getMessage()
    }, [])


    return (<>
        <h2 className="ws-web-title">Wish Generator</h2>
        <div className='ws-message-card-wrapper p-3'>
            <Card body className='p-4 mt-3 ws-message-card'>{message}</Card>
        </div>
        <Button href='/' className='mt-2'>
            Generate your wish
        </Button>
    </>
    )
}
