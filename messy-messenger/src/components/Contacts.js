import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SingleContact from './SingleContact';
import List from '@material-ui/core/List';

function Contacts() {
  return (
    <div className="ContactsRow">
      <Card variant="outlined" style={{ backgroundColor: '#287c5c' }}>
        <CardContent>
          <List>
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contacts;
