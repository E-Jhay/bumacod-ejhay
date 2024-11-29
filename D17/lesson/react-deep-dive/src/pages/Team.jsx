import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamMember from "../components/TeamMember";
import teamData from "../data/teamData";

const Team = () => {
  return (
    <Container>
      <h2 className="my-4">Meet Our Team</h2>
      <Row>
        {teamData.map((member) => (
          <div key={member.id} className="col-md-4">
            <TeamMember member={member} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
