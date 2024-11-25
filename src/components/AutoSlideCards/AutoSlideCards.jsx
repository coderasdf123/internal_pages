import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";

// Import user images
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const AutoSlideCards = () => {
  const cards = [
    {
      title: "TEACHING QUALITY",
      description: "The teachers at NNIIT explain concepts clearly and make learning enjoyable. Their tips have been a game-changer for me!",
      author: "Aryan Mishra",
      designation: "Class 10",
    },
    {
      title: "RESULT-ORIENTED PREPARATION",
      description: "The mock exams and personalized feedback have prepared me well for JEE. NNIIT's resources are unparalleled!",
      author: "Shreya Verma",
      designation: "Class 12, AIR 54",
    },
    {
      title: "USER-FRIENDLY WEBSITE",
      description: "The NNIIT website is very well-designed, making it easy to access study material and attend online sessions.",
      author: "Anjali Rao",
      designation: "Class 9",
    },
    {
      title: "GREAT STUDY MATERIAL",
      description: "NNIIT's study material is well-structured and extremely helpful for board exams and competitive exams alike.",
      author: "Rohan Kapoor",
      designation: "Class 11, AIR 112",
    },
    {
      title: "INSPIRATIONAL TEACHERS",
      description: "The teachers are very motivating and help us tackle even the most challenging topics with ease.",
      author: "Ishaan Singh",
      designation: "Class 12, AIR 89",
    },
  ];

  const userImages = [user1, user2, user3]; // Array of user images

  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card>
              <Title>{card.title}</Title>
              <Content>{card.description}</Content>
              <Footer>
                <Author>{card.author}</Author>
                <Role>{card.designation}</Role>
              </Footer>
              <UserImage>
                <img src={userImages[index % userImages.length]} alt="User" />
              </UserImage>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default AutoSlideCards;

// Styled Components
const Container = styled.div`
  background: #f7f7f7;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  position: relative; /* Ensure relative positioning */
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
      135deg,
      rgba(255, 183, 77, 0.8) 0%,
      rgba(255, 234, 167, 0.8) 100%
    );
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Author = styled.p`
  font-weight: bold;
  color: #444;
  margin: 0;
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const UserImage = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ddd;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
