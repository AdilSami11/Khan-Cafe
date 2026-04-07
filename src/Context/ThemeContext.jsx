import { createContext, useState } from "react";

// Create a context for the theme

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

// Create a provider component for the theme context

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
