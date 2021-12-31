import React, { createContext, FC, useReducer, useContext } from 'react';
import { Theme, UseThemeToggler } from './LightDarkMode';

const TOGGLE_MODE = 'TOGGLE_MODE';

const initialState = { theme: 'light' };

type State = typeof initialState;

interface ToggleModeAction {
  type: typeof TOGGLE_MODE;
  payload: Theme;
}

type ActionTypes = ToggleModeAction;

type Dispatch = (action: ActionTypes) => void;

export const toggleMode = (theme: Theme): ActionTypes => {
  return {
    type: TOGGLE_MODE,
    payload: theme,
  };
};

const Context = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
);

const Reducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </>
  );
};

// the type errors showing here are a result of versioning of @types/react and tsconfig settings
export const useMode = () => {
  const {
    state: { theme },
  } = useContext(Context);

  return theme;
};

export const useModeToggler = () => {
  const { dispatch } = useContext(Context);

  const toggleMode: UseThemeToggler = (theme) => {
    if (theme === 'dark') {
      dispatch({ type: TOGGLE_MODE, payload: 'light' });
    } else {
      dispatch({ type: TOGGLE_MODE, payload: 'dark' });
    }
  };

  return toggleMode;
};
