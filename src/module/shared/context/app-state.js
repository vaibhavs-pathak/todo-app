import { useState, useReducer } from "react";
import AppContext from "./app-context";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "initCount":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

const AppState = (props) => {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);
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
