import React, { useState } from 'react';

/**
 *
 * Build a simple app that allows the user to toggle light and dark mode as a react hook.
 *
 * Components will need a useMode() hook either 'light' or 'dark' so that they can change
 * their internal CSS.
 *
 * There should also be a way to useModeToggler() which returns a function that can be used
 * to toggle light or dark mode.
 *
 * The idea is that you have a way to globally mark the theme for the entire
 * app, then a hook that can be used to change the theme.
 *
 */
export const App = () => {
  return <Main />;
};

export type Theme = 'light' | 'dark';

export type UseThemeToggler = (theme: Theme) => void;

export type UseTheme = () => Theme;

export const Main = () => {
  return (
    <div>
      <Settings />
    </div>
  );
};

export const Settings = () => {
  const { mode } = UseMode();

  const toggleMode = UseModeToggler(mode);

  return <button onClick={toggleMode}>toggle light/dark mode</button>;
};

const UseMode = () => {
  const [mode, setMode] = useState<Theme>('light');

  return {
    mode,
    setMode,
  };
};

const UseModeToggler = (theme: Theme) => {
  const { setMode } = UseMode();

  const toggleMode = () => {
    if (theme === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  return toggleMode;
};
