import React, { useState } from "react";
import vedu from "../../assets/converted_image.jpg";
//import DelayedFormPopup from "../DelayedComponent/DelayedComponent";
import PopupForm from "../../components/PopupForm/PopupForm.jsx"; // Ensure this is the popup form component

const FreeDemoComponent = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5rem 2rem",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Roboto', sans-serif",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    gap: "2rem",
  };

  const contentStyle = {
    flex: "1",
    textAlign: "left",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
  };

  const highlightStyle = {
    color: "#f05454",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    margin: "1rem 0",
    color: "#666",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    position: "relative",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#f05454",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    animation: "continuousBounce 1s ease-in-out infinite",
  };

  const buttonHoverStyle = {
    transform: "translateY(-5px)",
    backgroundColor: "#d94343",
  };

  const imageStyle = {
    flex: "1",
    textAlign: "center",
  };

  const demoImageStyle = {
    maxWidth: "80%",
    borderRadius: "10px",
  };

  return (
    <>
      {/* Global styles for the continuous bounce animation */}
      <style>{`
        @keyframes continuousBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {isPopupVisible && <PopupForm closePopup={handleClosePopup} />}
      

      <div
        style={containerStyle}
        onClick={() => handleOpenPopup()} // Triggers popup on clicking anywhere in the component
      >
        <div style={contentStyle} className="ml-6 p-10">
          <h1 style={headingStyle}>
            Book your{" "}
            <span style={highlightStyle}> Free Demo</span> session
          </h1>
          <p style={paragraphStyle}>
            Get a free academic counselling session with our experts and explore
            how we can help you excel in your academics.
          </p>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
                        <button
              style={buttonStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#f05454";
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering container click event
                window.open("https://calendar.app.google/ACitve3sDuj7vWWt5", "_blank"); // Replace with your Google Calendar link
              }}
            >
              Book a Free Demo
            </button>

          </div>
        </div>
        <div style={imageStyle}>
          <img src={vedu} alt="Students and Teacher" style={demoImageStyle} />
        </div>
      </div>
    </>
  );
};

export default FreeDemoComponent;