import React, { useState } from "react";
import MessageCard from "./components/MessageCard";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getBirthdayMessage from "./data/Birthday";
import getWeddingAnniversaryMessage from "./data/WeddingAnniversary";
import getDiwaliMessage from "./data/Diwali";

const App = () => {

    const [occasion, setOccasion] = useState();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {

        if (!occasion || !name.length)
            return

        let messageObject;
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

        const section = document.querySelector('#msg-card');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return <>

        <h2 className="m-4 ws-web-title">Wish Generator</h2>

        <Row>
            <Col xs={12} md={12} lg={12} className="ws-column">
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
                    <Button variant="primary" onClick={handleSubmit}>
                        <span className="pl-5 pr-1" >
                            {message.length ? 'Change Message' : 'Generate Message'}
                        </span>
                    </Button>
                </div>

            </Col>
            <Col xs={12} md={12} lg={12} className="ws-column" id='msg-card'>
                {message && message.length ? <MessageCard message={message} /> : ''}
            </Col>
        </Row>
    </>;
};

export default App;