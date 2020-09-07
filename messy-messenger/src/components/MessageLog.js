import React, { useEffect, useState } from 'react';
import Message from './Message';
import { db } from '../Firebase';

function MessageLog({ user }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('Messages')
      .orderBy('time')
      .onSnapshot((snap) => {
        setMessages(() =>
          snap.docs.map((message) => {
            console.log('amazing', user);
            return (
              <Message key={message.id} textContent={message} user={user} />
            );
          })
        );
      });
  }, []);
  return <div style={{ width: '33vh' }}>{messages}</div>;
}

export default MessageLog;
