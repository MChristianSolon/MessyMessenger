import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { db, timestamp } from '../Firebase';
import '../Log.css';
function MessageForm() {
  const [text, setText] = useState('');

  function handleChange(val) {
    setText(val.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    db.collection('Messages').add({
      message: text,
      user: 'John',
      time: timestamp(),
    });
    console.log('submitted');
    setText('');
    console.log(text);
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Enter Message"
          variant="filled"
          className="MessageField"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default MessageForm;
