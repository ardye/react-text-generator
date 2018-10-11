import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  onChange = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange(this.state.value);
    });
  };
  render() {
    return (
      <div>
        <Label>Paragraph</Label>
        <Input
          type="number"
          value={this.props.value}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default Text;
