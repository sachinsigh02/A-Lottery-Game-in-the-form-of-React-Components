import React, { useState } from "react";

export default function LotteryGame() {
  const [ticket, setTicket] = useState(null); 
  const [message, setMessage] = useState(""); 

  const generateTicket = () => {

    const randomTicket = Math.floor(100 + Math.random() * 900); 
    setTicket(randomTicket);

    
    const digits = randomTicket.toString().split("").map(Number); 
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

   
    if (sum === 15) {
      setMessage("Congratulations! You won the Lottery 🎉");
    } else {
      setMessage("Try Again! Better luck next time.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lottery Game</h1>
      <button
        onClick={generateTicket}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Lottery Ticket
      </button>

      {ticket !== null && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Ticket: {ticket}</h2>
          <p style={{ fontSize: "18px", color: message.includes("Congratulations") ? "green" : "red" }}>
            {message}
          </p>
        </div>
      )}
    </div>
  );
}