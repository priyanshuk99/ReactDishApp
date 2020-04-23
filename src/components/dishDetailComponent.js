import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="50%" object src={dish.image} alt={dish.name} />

        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}
function RenderComment({ comments }) {
  return comments.map((element) => (
    <div key={element.id}>
      <ListGroup>
        <ListGroupItem>--{element.comment}</ListGroupItem>
        <ListGroupItem>
          author:{element.author},
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(element.date)))}
        </ListGroupItem>
      </ListGroup>
    </div>
  ));
}
const DishDetail = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={dish} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <Card>
                  <CardTitle>Comments:</CardTitle>
                  <CardBody>
                    <CardText>
                      <RenderComment comments={dish ? dish.comments : null} />
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default DishDetail;
