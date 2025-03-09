import React from "react";

const MFEComponent = ({ title, color, mode }: { title: string; color: string; mode: string }) => {
  return (
    <div style={{ padding: 20, background: color }}>
      <h2>{title}</h2>
      <p>Mode: {mode}</p>
    </div>
  );
};

export default MFEComponent;
