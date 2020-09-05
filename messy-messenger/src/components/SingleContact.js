import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

function SingleContact() {
  return (
    <div>
      <ListItem button onClick={() => console.log('nice')}>
        <Card className="SingleContactCard">
          <CardHeader
            avatar={
              <Avatar alt="Bemy Sharp" src="/static/images/avatar/1.jpg" />
            }
            title="Robyn"
            titleTypographyProps={{ variant: 'body1', component: 'span' }}
            // className={classes.cardHeader}
          />
          <CardContent>
            <Typography>NOW</Typography>
          </CardContent>
        </Card>
      </ListItem>
    </div>
  );
}

export default SingleContact;
