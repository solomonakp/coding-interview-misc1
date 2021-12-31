import React from 'react';
import { useMode, useModeToggler, Provider } from './Context';
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

export type Theme = 'light' | 'dark';

export type UseThemeToggler = (theme: Theme) => void;

export type UseTheme = () => Theme;

export const Settings = () => {
  const mode = useMode();

  const toggle = useModeToggler();

  const styles = {
    backgroundColor: mode === 'light' ? 'white' : 'black',
    color: mode === 'light' ? 'black' : 'white',
  };

  const toggleMode = React.useCallback(() => {
    toggle(mode);
  }, [toggle, mode]);

  return (
    <button onClick={toggleMode} style={styles}>
      toggle {mode === 'light' ? 'dark' : 'light'}
    </button>
  );
};

export const Main = () => {
  return (
    <div>
      <Settings />
    </div>
  );
};

const App = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  );
};

export default App;
