import React, { useState } from "react";
import MessageCard from "./components/MessageCard";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getBirthdayMessage from "./data/Birthday";
import getWeddingAnniversaryMessage from "./data/WeddingAnniversary";
import getDiwaliMessage from "./data/Diwali";

const App = () => {

    const [isMessageGenerated, setIsMessageGenerated] = useState(false);
    const [occasion, setOccasion] = useState();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messageId, setMessageId] = useState();
    const handleSubmit = () => {
        let messageObject;
        if (!occasion || !name.length)
            return
        switch (occasion) {
            case "1":
                messageObject = getBirthdayMessage();
                break;
            case "2":
                messageObject = getWeddingAnniversaryMessage();
                break;
            case "3":
                messageObject = getDiwaliMessage();
                break;
        }
        setMessage(messageObject.startMessage + name + messageObject.endMessage);
        setMessageId(messageObject.id);
        setIsMessageGenerated(true);
    }

    const copyLink = () => {
        navigator.clipboard.writeText(document.URL + 'share/' + occasion + '/' + messageId + '/' + name);
        alert("Wish link is copied to your clipboard!!");
    }


    return <>
        <h2 className="ws-web-title">Wish Generator</h2>
        <Row>
            {isMessageGenerated ?
                <Col xs={12} md={12} lg={12} className="ws-column">
                    {message && message.length ?
                        <MessageCard
                            message={message}
                            changeMessage={handleSubmit}
                            generateNewMessage={setIsMessageGenerated}
                            copyLink={copyLink} />
                        : ''}
                </Col>
                : <Col xs={12} md={12} lg={12} className="ws-column">
                    <div className="ws-form">
                        <Form.Label>
                            Occasion: &nbsp;
                            <span className="text-color-red">*</span>
                        </Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}>
                            <option>Select Occasion</option>
                            <option value="1">Birthday</option>
                            <option value="2">Wedding Anniversary</option>
                            <option value="3">Diwali</option>
                        </Form.Select>
                        <div className="ws-height-15">
                            {!occasion && <span className="ws-input-error">Select Occasion</span>}
                        </div>
                        <Form.Group className="mb-3 mt-3" controlId="receiverName">
                            <Form.Label>
                                Receiver Name:&nbsp;
                                <span className="text-color-red">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Receiver Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <div className="ws-height-15">
                                {!name.trim().length && <span className="ws-input-error">Please enter Receiver name</span>}
                            </div>
                        </Form.Group>
                    </div>
                    <div>
                        <Button variant="outline-primary" onClick={handleSubmit}>
                            <span className="pl-5 pr-1" >
                                Generate Message
                            </span>
                        </Button>
                    </div>
                </Col>
            }
        </Row>
    </>;
};

export default App;