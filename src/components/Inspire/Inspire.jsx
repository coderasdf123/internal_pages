import React from "react";
import styled from 'styled-components';
import no1 from "../../assets/no1.jpg";
import no2 from "../../assets/no2.jpg";
import no3 from "../../assets/no3.jpg";

const Inspire = () => {
  const navItems = [
    "All",
    "IIT JEE",
    "NEET",
    "10th Board",
    "12th Board",
    "NTSE",
    "Olympiad",
  ];

  const students = [
    { name: "Pranavanand Saji", rank: "AIR 31", image: no1 },
    { name: "Uma Kumari", rank: "AIR 188", image: no2 },
    { name: "Satyendu Kar", rank: "AIR 366", image: no3 },
  ];
   
  
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
      }}
    >
      {/* Header Section */}
      <Header>
        <h1>
          Inspired students.{" "}
          <span style={{ color: "orange" }}>Inspired results</span>
        </h1>
        <p>
          Our results reflect the passion, hard work, and efforts of our students
          and teachers.
        </p>
        <ButtonGroup>
          <ExploreButton>Explore courses</ExploreButton>
          <ViewResultsButton>View our results</ViewResultsButton>
        </ButtonGroup>
      </Header>

      {/* Navigation Section */}
      <Navigation>
        {navItems.map((item, index) => (
          <NavButton
            key={index}
            isActive={index === 0}
          >
            {item}
          </NavButton>
        ))}
      </Navigation>

      {/* Main Content */}
      <Main>
        <h2>
          NNIIT Students Shine Bright in{" "}
          <span style={{ color: "orange" }}>JEE MAIN 2024</span>
        </h2>
        <StudentGrid>
          {students.map((student, index) => (
            <StudentCard key={index}>
              <StudentImage src={student.image} alt={student.name} />
              <StudentName>{student.name}</StudentName>
              <StudentRank>{student.rank}</StudentRank>
            </StudentCard>
          ))}
          <QualifiedStudentsHighlight>
            <QualifiedStudentsCount>1698</QualifiedStudentsCount>
            <QualifiedStudentsText>
              NNIIT Students Qualified for JEE Advanced 2024
            </QualifiedStudentsText>
          </QualifiedStudentsHighlight>
        </StudentGrid>
      </Main>

      {/* Footer */}
      <Footer>
        <FooterText>
          TOLL FREE: 1800-120-456-456 | 91-988-660-2456 (9 AM to 9:30 PM all
          days)
        </FooterText>
        <FooterLinks>
          <FooterLink href="#">Engineering Blog</FooterLink>
          <FooterLink href="#">Spoken English</FooterLink>
        </FooterLinks>
      </Footer>
    </div>
  );
};

export default Inspire;

const Header = styled.header`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
`;

const ButtonGroup = styled.div`
  margin-top: 1.5rem;
`;

const ExploreButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: transparent; /* Default to transparent */
  color: orange; /* Default to orange text */
  border: 2px solid orange; /* Border remains orange */
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: orange; /* Orange background on hover */
    color: #fff; /* White text on hover */
  }
`;

const ViewResultsButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: transparent; /* Default to transparent */
  color: orange; /* Default to orange text */
  border: 2px solid orange; /* Border remains orange */
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: orange; /* Orange background on hover */
    color: #fff; /* White text on hover */
  }
`;



const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const NavButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.isActive ? 'orange' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#555')};
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: ${(props) => (props.isActive ? '#ff9c00' : '#f0f0f0')};
    color: ${(props) => (props.isActive ? '#fff' : '#333')};
  }
`;

const Main = styled.main`
  background-color: #ffe8cc;
  padding: 2rem;
  text-align: center;
`;

const StudentGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const StudentCard = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  width: 150px;
  transition: transform 0.3s, box-shadow 0.3s;

  :hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StudentImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid orange;
  margin-bottom: 1rem;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

const StudentName = styled.p`
  font-weight: bold;
  color: #333;
`;

const StudentRank = styled.span`
  color: #555;
  font-size: 0.9rem;
`;

const QualifiedStudentsHighlight = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: orange;
  color: #fff;
  border-radius: 10px;
  max-width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;

  :hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const QualifiedStudentsCount = styled.h3`
  font-size: 3rem;
  margin: 0;
`;

const QualifiedStudentsText = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  color: #555;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  transition: transform 0.3s;

  :hover {
    transform: translateY(-2px);
  }
`;

const FooterLink = styled.a`
  color: orange;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  :hover {
    color: #ff9c00;
  }
`;