import React from "react";
import styled from "styled-components";

const StudyMaterials = () => {
  return (
    <Container>
      <MainHeading>Study Materials</MainHeading>

      <CardsContainer>
        <Card color="#4285F4">
          <TopSection>
            <CardTitle>NCERT Solutions</CardTitle>
          </TopSection>
          <BottomSection>
            <CardHeading>Study Resources</CardHeading>
            <CardContent>
              <p>Detailed Chapter-wise Solutions, Formulas, and Explanations.</p>
              <LearnMoreContainer>
                <LearnMore>Learn More</LearnMore>
                <Arrow>→</Arrow>
              </LearnMoreContainer>
            </CardContent>
          </BottomSection>
        </Card>

        <Card color="#EA4335">
          <TopSection>
            <CardTitle>PYQs</CardTitle>
          </TopSection>
          <BottomSection>
            <CardHeading>Previous Papers</CardHeading>
            <CardContent>
              <p>Previous Year Question Papers with solutions and analysis.</p>
              <LearnMoreContainer>
                <LearnMore>Learn More</LearnMore>
                <Arrow>→</Arrow>
              </LearnMoreContainer>
            </CardContent>
          </BottomSection>
        </Card>

        <Card color="#FBBC05">
          <TopSection>
            <CardTitle>Sample Papers</CardTitle>
          </TopSection>
          <BottomSection>
            <CardHeading>Mock Tests</CardHeading>
            <CardContent>
              <p>Practice with Sample Question Papers for all subjects.</p>
              <LearnMoreContainer>
                <LearnMore>Learn More</LearnMore>
                <Arrow>→</Arrow>
              </LearnMoreContainer>
            </CardContent>
          </BottomSection>
        </Card>

        <Card color="#34A853">
          <TopSection>
            <CardTitle>Important Questions</CardTitle>
          </TopSection>
          <BottomSection>
            <CardHeading>Key Questions</CardHeading>
            <CardContent>
              <p>Critical questions for boards and competitive exams.</p>
              <LearnMoreContainer>
                <LearnMore>Learn More</LearnMore>
                <Arrow>→</Arrow>
              </LearnMoreContainer>
            </CardContent>
          </BottomSection>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default StudyMaterials;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const MainHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Aligns the cards in one row */
  gap: 20px;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 22%; /* Adjust width for smaller card size */
  min-width: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  height: 250px; /* Adjust height as needed */
  background-color: ${(props) => props.color}; /* Background color for each card */

  &:hover {
    transform: scale(1.05);
  }
`;

const TopSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

const BottomSection = styled.div`
  flex: 1.5;
  background-color: white;
  padding: 15px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardHeading = styled.h5`
  font-size: 0.95rem;
  font-weight: bold;
  color: #4285f4; /* Blue heading */
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
  }
`;

const LearnMoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const LearnMore = styled.a`
  font-size: 0.9rem;
  color: #4285f4; /* Blue color for the link */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  color: #4285f4;
`;
