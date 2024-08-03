import React, { useEffect, useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import CIcon from "@coreui/icons-react";
import "./style.css";

const SkillCloud = ({ skills, icon }) => {
  const cloudRef = useRef(null);

  const [springs, api] = useSprings(skills.length, (i) => ({
    x: 0,
    config: { tension: 200, friction: 10 },
  }));

  useEffect(() => {
    const cloudElement = cloudRef.current;
    const handleResize = () => {
      api.start((i) => ({ x: 0 }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [api]);

  const handleMouseEnter = (i) => {
    api.start((index) => ({
      x: index === i ? (Math.random() - 0.5) * 20 : 0,
    }));
  };

  const handleMouseLeave = () => {
    api.start((index) => ({ x: 0 }));
  };

  return (
    <div ref={cloudRef} className="skill-cloud">
      {skills.map((data, i) => (
        <animated.div
          key={i}
          className="skill-item"
          style={{ transform: springs[i].x.to((x) => `translateX(${x}px)`) }}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <CIcon icon={icon[data.icon]} size="xl" />
          <span>{data.name}</span>
        </animated.div>
      ))}
    </div>
  );
};

export default SkillCloud;
