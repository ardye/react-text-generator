import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <div>
        <Jumbotron style={{ textAlign: 'justify' }}>
          {this.props.value}
        </Jumbotron>
      </div>
    );
  }
}

export default Output;
