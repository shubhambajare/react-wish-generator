import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { exportComponentAsJPEG } from 'react-component-export-image';

const MessageCard = (props) => {
    const [copyBtnText, setCopyBtnText] = useState('Copy Message Link');
    const messageCardRef = useRef();
    return (
        <div className='m-4 ws-display-inline-block ws-message-card-wrapper'>

            <Card ref={messageCardRef} body className='p-4 mt-3 ws-message-card'>{props.message}</Card>
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

                <Button variant="outline-success" style={{ marginRight: '10px', marginBottom: '15px' }} onClick={() => exportComponentAsJPEG(messageCardRef)}>
                    <span >
                        Download Image
                    </span>
                </Button>

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