import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio page";
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#000",
          fontSize: "clamp(3rem, 10vw, 4.75rem)",
        }}
      >
        Portfolio page
      </h1>{" "}
    </div>
  );
};

export default Portfolio;
