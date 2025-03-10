import React from "react";

const MFEComponent = ({ title, color }: { title: string; color: string; }) => {
  return (
    <div style={{ padding: 20, background: color }}>
      <h2>{title}</h2>
    </div>
  );
};

export default MFEComponent;
