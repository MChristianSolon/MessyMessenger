import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MessageForm from './MessageForm';
import '../Log.css';
import MessageLog from './MessageLog';

function Log() {
  return (
    <div className="LogRow">
      <Card className="CardRow">
        <CardContent>
          <MessageLog />
        </CardContent>
        <MessageForm />
      </Card>
    </div>
  );
}

export default Log;
