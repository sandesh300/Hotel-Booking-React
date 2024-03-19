import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <Col key={room.id} className="mb-4" xs={12} md={6} lg={4}>
      <Card className="room-card">
        <div className="room-img">
          <Link to={`/book-room/${room.id}`}>
            <Card.Img
              variant="top"
              src={`data:image/png;base64, ${room.photo}`}
              alt="Room Photo"
            />
          </Link>
        </div>
        <Card.Body className="room-details">
          <Card.Title className="room-type">{room.roomType}</Card.Title>
          <Card.Text className="room-price">{room.roomPrice} / night</Card.Text>
          <Card.Text className="room-description">
            Some room information goes here for the guest to read through
          </Card.Text>
          <Link to={`/book-room/${room.id}`} className="btn btn-primary btn-block">
            Book Now
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
