import React from "react";
import { Message } from "semantic-ui-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Message negative>
          <Message.Header>Oops! Something went wrong.</Message.Header>
          <p><a href="/">Got to home</a></p>
        </Message>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
