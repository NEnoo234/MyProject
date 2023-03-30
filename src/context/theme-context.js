import { createContext, useContext, useReducer, useEffect } from "react";
import themeReucer from "./themeReducer";

export const ThemeContext = createContext();

const initalThemeState = JSON.parse(localStorage.getItem("ThemeSettings")) || {
  primary: "color-1",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispathTheme] = useReducer(themeReucer, initalThemeState);

  const themeHandler = (buttonClassName) => {
    dispathTheme({ type: buttonClassName });
  };

  // save theme settings to local storage
  useEffect(() => {
    localStorage.setItem("ThemeSettings", JSON.stringify(themeState));
  }, [themeState.primary, themeState.background]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
//custom
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
