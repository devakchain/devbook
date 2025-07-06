import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import "../styles/CopyButton.scss";

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("שגיאה בהעתקת הקוד 😞");
    }
  };

  return (
    <button className="copy-button" onClick={handleCopy}>
      {copied ? <FiCheck className="icon" /> : <FiCopy className="icon" />}
      {copied ? " הועתק!" : " העתק"}
    </button>
  );
}

export default CopyButton;
