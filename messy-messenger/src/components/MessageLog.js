import React, { useEffect, useState } from 'react';
import Message from './Message';
import { db } from '../Firebase';

function MessageLog() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('Messages')
      .orderBy('time')
      .onSnapshot((snap) => {
        setMessages(() =>
          snap.docs.map((message) => {
            return <Message key={message.id} textContent={message} />;
          })
        );
      });
  }, []);
  return <div>{messages}</div>;
}

export default MessageLog;
