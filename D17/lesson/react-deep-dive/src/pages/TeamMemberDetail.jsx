import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import teamData from "../data/teamData";

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamData.find((member) => member.id === parseInt(id));

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <Container>
      <h2 className="my-4">
        {member.name} - {member.role}
      </h2>
      <Card>
        <Card.Body>
          <Card.Text>
            <strong>Email:</strong> {member.email}
          </Card.Text>
          <Card.Text>
            <strong>Phone:</strong> {member.phone}
          </Card.Text>
          <Card.Text>
            <strong>Bio:</strong> {member.bio}
          </Card.Text>
          <Link to="/team">
            <Button variant="secondary">Back to Team</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TeamMemberDetail;
