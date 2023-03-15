import { Component, createRef } from "react";


class Split extends Component {
  target = createRef();

  split = () => {
    if (this.target.current) {
      Splitting({ target: this.target.current });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    return <div ref={this.target}>{this.props.children}</div>;
  }
}

export default Split;
