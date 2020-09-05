import React from 'react';

function Message({ textContent }) {
  return (
    <div>
      <h3>
        {textContent.data().user}: {textContent.data().message}
      </h3>
    </div>
  );
}

export default Message;
