import { useContext } from "react";
import { Header, Input, Segment, Form, Button } from "semantic-ui-react";
import { AppContext } from '../../../shared'
import { MainLayout } from "../../../../layout";

// const reducerFunction = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "initCount":
//       return {
//         ...state,
//         count: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const initialState = {
//   count: 0,
// };

const UseReducerExample = (props) => {
//   const [input, setInput] = useState(0);
//   const [state, dispatch] = useReducer(reducerFunction, initialState);
const { input, setInput, state, dispatch } = useContext(AppContext);

  return (
    <>
      <MainLayout>
        <Header as="h2">Reducer Example</Header>
        <Segment inverted>
          <Form inverted>
            <Form.Group>
              <Form.Field inline>
                <label>First name</label>
                <Input
                  type="text"
                  name="initialValue"
                  onChange={(e) => setInput(parseInt(e.target.value))}
                />
              </Form.Field>
              <Button
                default
                onClick={() => dispatch({ type: "initCount", payload: input })}
              >
                Set Initial Count
              </Button>
            </Form.Group>
            <Form.Field inline>
              <label>Current Count:</label>
              <p>{state.count}</p>
            </Form.Field>
            <Button primary onClick={() => dispatch({ type: "increment" })}>
              Increment
            </Button>
            <Button secondary onClick={() => dispatch({ type: "decrement" })}>
              Decrement
            </Button>
          </Form>
        </Segment>
      </MainLayout>
    </>
  );
};

export default UseReducerExample;
