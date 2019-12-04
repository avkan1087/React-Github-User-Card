import React from "react";
import {Card, CardImg, CardBody,CardTitle, Button} from 'reactstrap';


export default function UserCard(props) {
   
  
    return (
        <div>
            <Card>
            <CardImg top width="30%" src={props.user.avatar_url} alt="Follower Photo" />
            <CardBody>
                <CardTitle>{props.user.name}</CardTitle>
                <Button href= {props.user.html_url}>Profile</Button>
            </CardBody>
            </Card>
        </div>
    );
  }
  
 