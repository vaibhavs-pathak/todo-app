import { useState, useReducer } from "react";
import AppContext from "./app-context";
import { applicationReducerFunction } from '../../../redux-store/reducers';

const AppState = (props) => {
  const initialState = {
    count: 0,
  };
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(applicationReducerFunction, initialState);
  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
