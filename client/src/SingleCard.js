import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function SingleCard(props) {

  return (
    <Card className="card">
      <CardContent>
        <Typography className="label" color="textSecondary" gutterBottom>
          Another meaningless phrase
        </Typography>
        <Typography className="title">
          {props.post.title}
        </Typography>
        <Typography className="subtext" color="textSecondary">
          whatever....
        </Typography>
        <Typography className="contents">
          {props.post.contents}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SingleCard;