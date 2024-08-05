import React from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { useTheme } from '../../hooks/ThemeContext'; // Make sure to import the ThemeContext

const Themetoggle = () => {
  const { theme, setTheme } = useTheme();

  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
