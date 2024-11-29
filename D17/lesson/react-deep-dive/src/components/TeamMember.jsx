import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeamMember = ({member}) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
        <Card.Text>{member.email}</Card.Text>
        <Link to={`/team/${member.id}`} className="btn btn-primary">
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default TeamMember;
