import React, { useState } from "react";

const Status = () => {
  const [status, setStatus] = useState(" Open");
  return (
    <div className="statusContainer">
      <div className="status">
        <h2>Status:{status}</h2>
        <button onClick={() => setStatus("Closed")}>close</button>
        <button onClick={() => setStatus("Open")}>open</button>
      </div>
    </div>
  );
};

export default Status;
