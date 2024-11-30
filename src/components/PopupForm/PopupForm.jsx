import React from "react";

const PopupForm = ({ closePopup }) => {
  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "500px",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "999",
  };

  const closeButtonStyle = {
    backgroundColor: "#f05454",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  return (
    <>
      <div style={overlayStyle} onClick={closePopup}></div>
      <div style={popupStyle}>
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
          Book a Free Demo Session
        </h2>
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label>Name</label>
            <input type="text" style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }} />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input type="email" style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }} />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Phone</label>
            <input type="text" style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }} />
          </div>
          <button style={closeButtonStyle} type="button" onClick={closePopup}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default PopupForm;