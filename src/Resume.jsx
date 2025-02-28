import React from "react";

const Resume = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <embed
        src="/main.pdf"
        type="application/pdf"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default Resume;