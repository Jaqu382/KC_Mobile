// ThemeContext.js
import React, { createContext, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const AppThemeProvider = ({ children }) => {
  const appFontSize = useSelector((state) => state.fontSize.fontSize);
  const isDarkModeEnabled = useSelector((state) => state.darkMode.isEnabled);

  const theme = useMemo(
    () => ({
      appFontSize,
      isDarkModeEnabled,
    }),
    [appFontSize, isDarkModeEnabled]
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};