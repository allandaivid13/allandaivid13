import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationSystem = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    
    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('/api/communication/messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            try {
                await axios.post('/api/communication/messages', { content: newMessage });
                setNewMessage('');
                fetchMessages();
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="communication-system">
            <h2>Communication System</h2>
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
            <div className="send-message">
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default CommunicationSystem;