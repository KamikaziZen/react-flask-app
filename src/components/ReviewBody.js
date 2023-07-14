import React from "react";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";
import './ReviewBody.css'

function ReviewBody(props) {
  return (
  <div className='reviews'>
    <Card>
      <CardBody>
        <div className="reviews-top">
          <div className="user-details">
            <CardImg
              className="avatar"
              src={props.profilePic} 
              alt="user avatar"
            />

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {props.firstName} {props.lastName || "John Doe"}
            </CardSubtitle>
            {[...Array(props.stars || 5)].map((star) => {
              return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
            })}
          </div>
          <div className="reviews-body">
            <CardText>
              {props.comment ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
            </CardText>
          </div>
          <CardText>
            <small className="text-muted text-bold">
              {props.occupation || "Biology teacher"}
            </small>
          </CardText>
        </div>
      </CardBody>
    </Card>
  </div>
  );
}

export default ReviewBody;
