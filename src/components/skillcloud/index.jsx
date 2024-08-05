import React, { useRef, useEffect } from "react";
import CIcon from "@coreui/icons-react";
import "./style.css";

const SkillCloud = ({ skills, icon }) => {
  const cloudRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Any specific logic you want to run on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={cloudRef} className="skill-cloud">
      {skills.map((data, i) => (
        <div key={i} className="skill-item">
          <CIcon icon={icon[data.icon]} size="xl" className="skill-icon" />
          <span className="my-2">{data.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillCloud;
