import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const MessageCard = (props) => {
    const [copyBtnText, setCopyBtnText] = useState('Copy Message Link');
    return (
        <div className='m-4 ws-display-inline-block ws-message-card-wrapper'>

            <Card body className='p-4 mt-3 ws-message-card'>{props.message}</Card>
            <div className="mt-3">
                <Button variant="outline-success" style={{ marginRight: '10px', marginBottom: '15px' }} onClick={props.changeMessage}>
                    <span >
                        Change Message
                    </span>
                </Button>

                <CopyToClipboard text={props.shareLink} onCopy={() => { setCopyBtnText('Copied') }}>
                    <Button variant="outline-success" style={{ marginRight: '10px', marginBottom: '15px' }} >
                        {copyBtnText}
                    </Button>
                </CopyToClipboard>

                <div>
                    <Button variant="outline-warning" style={{ marginRight: '10px', marginBottom: '15px' }} onClick={() => props.generateNewMessage(false)}>
                        <span  >
                            Generate New Message
                        </span>
                    </Button>

                </div>
            </div>

        </div>
    )
}
export default MessageCard