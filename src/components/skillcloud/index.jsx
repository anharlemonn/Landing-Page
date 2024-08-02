import React, { useEffect, useRef, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import CIcon from "@coreui/icons-react";
import "./style.css";

const SkillCloud = ({ skills, icon }) => {
  const cloudRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [springs, setSprings] = useSprings(skills.length, (i) => ({
    left: positions[i]?.left || 0,
    top: positions[i]?.top || 0,
    scale: 1,
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  useEffect(() => {
    const cloudElement = cloudRef.current;
    const skillElements = cloudElement.children;
    const newPositions = Array.from(skillElements).map((el) => ({
      left: Math.random() * (cloudElement.offsetWidth - el.offsetWidth),
      top: Math.random() * (cloudElement.offsetHeight - el.offsetHeight),
    }));
    setPositions(newPositions);
  }, [skills]);

  useEffect(() => {
    setSprings((i) => ({
      left: positions[i]?.left || 0,
      top: positions[i]?.top || 0,
    }));
  }, [positions]);

  return (
    <div ref={cloudRef} className="skill-cloud">
      {skills.map((data, i) => (
        <animated.div
          key={i}
          className="skill-item"
          style={{ ...springs[i], position: "absolute" }}
          onMouseEnter={() =>
            setSprings((index) => ({
              scale: index === i ? 1.5 : 1,
            }))
          }
          onMouseLeave={() =>
            setSprings((index) => ({
              scale: 1,
            }))
          }
        >
          <CIcon
            icon={icon[data.icon]}
            size="xl"
            style={{ transform: `scale(${springs[i].scale})` }}
          />
          <span>{data.name}</span>
        </animated.div>
      ))}
    </div>
  );
};

export default SkillCloud;
