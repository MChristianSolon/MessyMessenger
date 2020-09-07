import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Message({ textContent, user }) {
  let chat = {};
  let chatCard = {};
  if (user === textContent.data().user) {
    chat = {
      background: 'rgb(0, 140, 255)',
    };
    chatCard = {
      position: 'relative',
      left: '100%',
    };
  } else {
    chat = {
      background: 'white',
    };
    chatCard = {
      position: 'relative',
    };
  }
  return (
    <Box m={2}>
      <Card className=" chat-cardContent" style={chatCard}>
        <div style={chat}>
          <CardContent>
            <Typography>
              {textContent.data().user}: {textContent.data().message}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Box>
  );
}

export default Message;
