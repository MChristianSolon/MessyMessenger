import React from 'react';
import Grid from '@material-ui/core/Grid';
import Log from './Log';
import Contacts from './Contacts';
import Activity from './Activity';
function Chat() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Contacts />
        </Grid>
        <Grid item xs={4}>
          <Log />
        </Grid>
        <Grid item xs={4}>
          <Activity />
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;
