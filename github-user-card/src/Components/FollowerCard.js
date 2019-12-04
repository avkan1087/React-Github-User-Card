import React from "react";
import {Card, CardImg, CardBody,CardTitle, Button} from 'reactstrap';
import { Col } from 'reactstrap';


export default function FollowerCard(props) {

  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.follower.avatar_url} alt="Follower Photo" />
        <CardBody>
          <CardTitle>{props.follower.login}</CardTitle>
          <Button href= {props.follower.html_url}>Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
}

