import { Component } from 'react';

class TestError extends Component {
  state = {
    isError: false,
  };
  handleClick = () => {
    this.setState({ isError: true });
  };
  componentDidUpdate(): void {
    if (this.state.isError) {
      throw new Error('error from test button');
    }
  }
  render() {
    return (
      <div id="testErrorContainer">
        <button id="testErrorButton" onClick={this.handleClick} type="button">
          Test Error
        </button>
      </div>
    );
  }
}

export default TestError;
