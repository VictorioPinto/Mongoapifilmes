import React, { useState } from "react";

const AddIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Quando o mouse entra
      onMouseLeave={() => setIsHovered(false)} // Quando o mouse sai
      style={{ width: "100%", border: 0 }}
    >
      {isHovered ? (
        // SVG para o estado "hover"
        
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="var(--azulrt)" // Certifique-se de que a variável CSS está definida
        style={{ width: "100%", border: 0, cursor:"pointer",transition: "0s" }} // Definindo o estilo inline (se necessário)
      >
        <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934L22.0007 13.3417C21.3749 13.1204 20.7015 13 20 13V5H4L4.001 19L13.2929 9.70715C13.6528 9.34604 14.22 9.31823 14.6123 9.62322L14.7065 9.70772L18.2521 13.2586C15.791 14.0069 14 16.2943 14 19C14 19.7015 14.1204 20.3749 14.3417 21.0007L2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
      </svg>
      ) : (
        // SVG para o estado normal
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--cinzaletra)" // Certifique-se de que a variável CSS está definida
          id="addicon"
          style={{ width: "100%", border: 0, cursor:"pointer",transition: "0s" }}  // Definindo o estilo inline (se necessário)
        >
          <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
        </svg>
      )}
    </div>
  );
};

export default AddIcon;
