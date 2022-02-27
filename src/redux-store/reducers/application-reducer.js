import { APPLICATION_ACTION } from '../actions';

export const applicationReducerFunction = (state, action) => {
  switch (action.type) {
    case APPLICATION_ACTION.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case APPLICATION_ACTION.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case APPLICATION_ACTION.RESET_COUNT:
      return {
        ...state,
        count: 0,
      };
    case APPLICATION_ACTION.INIT_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
