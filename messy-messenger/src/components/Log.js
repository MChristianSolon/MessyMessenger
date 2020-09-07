import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MessageForm from './MessageForm';
import '../Log.css';
import MessageLog from './MessageLog';

function Log({ user }) {
  console.log('LOG --', user);
  return (
    <div>
      <Card
        variant="outlined"
        className="CardRow "
        style={{ backgroundColor: '#287c5c' }}
      >
        <CardContent className="LogRow">
          <MessageLog user={user} />
        </CardContent>
        <MessageForm user={user} />
      </Card>
    </div>
  );
}

export default Log;
