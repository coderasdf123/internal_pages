import React, { useState } from "react";
import styled from "styled-components";

const TodaySchedule = () => {
  // States to store selected class, subject, and the schedule
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [schedule, setSchedule] = useState("");

  // Schedule data for different classes
  const classSchedules = {
    "Class 6-10": {
      Math: "10:00 AM - 11:00 AM - Algebra",
      Physics: "11:00 AM - 12:00 PM - Newton's Laws",
      Social: "1:00 PM - 2:00 PM - History",
      Language: "2:00 PM - 3:00 PM - English Literature",
    },
    "Class 11": {
      Math: "10:00 AM - 11:30 AM - Integration",
      Physics: "12:00 PM - 1:30 PM - Mechanics",
      Chemistry: "2:00 PM - 3:30 PM - Organic Chemistry",
    },
    "Class 12": {
      Math: "10:00 AM - 11:30 AM - Differential Equations",
      Physics: "12:00 PM - 1:30 PM - Electromagnetic Waves",
      Chemistry: "2:00 PM - 3:30 PM - Physical Chemistry",
      Biology: "4:00 PM - 5:00 PM - Genetics",
    },
    "JEE": {
      Math: "9:00 AM - 10:30 AM - Calculus",
      Physics: "11:00 AM - 12:30 PM - Thermodynamics",
      Chemistry: "1:00 PM - 2:30 PM - Inorganic Chemistry",
    },
    "NEET": {
      Biology: "9:00 AM - 10:30 AM - Human Physiology",
      Physics: "11:00 AM - 12:30 PM - Optics",
      Chemistry: "1:00 PM - 2:30 PM - Biomolecules",
    },
  };

  // Handle class selection
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubject(""); // Reset subject when class changes
    setSchedule(""); // Clear schedule when class changes
  };

  // Handle subject selection
  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);
    setSchedule(classSchedules[selectedClass]?.[subject] || "No schedule available");
  };

  return (
    <Container>
      <Title>Select Today's Study Schedule</Title>
      <Button
        selected={selectedClass !== ""}
        onClick={() => setSelectedClass(selectedClass === "" ? "Class 6-10" : "")}
      >
        Today's Schedule
      </Button>

      {selectedClass && (
        <div>
          <Dropdown>
            <label>Select Class:</label>
            <select onChange={handleClassChange} value={selectedClass}>
              <option value="Class 6-10">Class 6-10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
              <option value="JEE">JEE</option>
              <option value="NEET">NEET</option>
            </select>
          </Dropdown>

          <Dropdown>
            <label>Select Subject:</label>
            <select onChange={handleSubjectChange} value={selectedSubject}>
              <option value="">Select Subject</option>
              {selectedClass && Object.keys(classSchedules[selectedClass]).map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </Dropdown>

          {schedule && (
            <Schedule>
              <h3>Today's Schedule:</h3>
              <p>{schedule}</p>
            </Schedule>
          )}
        </div>
      )}
    </Container>
  );
};

export default TodaySchedule;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.selected ? "#f39c12" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    background-color: ${(props) => (props.selected ? "#e67e22" : "#f1c40f")};
  }
`;

const Dropdown = styled.div`
  margin-bottom: 15px;
  
  label {
    font-size: 1rem;
    margin-right: 10px;
  }
  
  select {
    padding: 8px;
    font-size: 1rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Schedule = styled.div`
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  
  h3 {
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
