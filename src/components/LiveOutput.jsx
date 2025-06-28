// src/components/LiveBlock.jsx
import React from "react";
import "../styles/liveoutput.scss";

function LiveBlock({ result }) {
  return (
    <div className="live-output">
      <h3>🔽 Output:</h3>
      <pre>{result}</pre>
    </div>
  );
}

export default LiveBlock;
