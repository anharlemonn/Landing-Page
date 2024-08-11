// src/hooks/ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

// Function to get CSS variable value
const getCssVariable = (variable) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};

// Create a context for the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Define colors based on CSS variables
  const primaryColor = getCssVariable("--primary-color");
  const secondaryColor = getCssVariable("--secondary-color");
  const textColor = getCssVariable("--text-color");
  const backgroundColor = getCssVariable("--bg-color");

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      text: {
        primary: textColor,
      },
      background: {
        default: backgroundColor,
      },
    },
    typography: {
      fontFamily: "'Raleway', sans-serif",
      h1: {
        fontFamily: "Marcellus",
      },
      h2: {
        fontFamily: "Marcellus",
      },
      h3: {
        fontFamily: "Marcellus",
      },
      h4: {
        fontFamily: "Marcellus",
      },
      h5: {
        fontFamily: "Marcellus",
      },
      h6: {
        fontFamily: "Marcellus",
      },
    },
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
