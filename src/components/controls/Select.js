import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';

class Select extends Component {
  constructor(props: Props) {
    super((props: Props));
    this.state = {
      value: props.value
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
        <Label>Use HTML</Label>
        <Input type="select" onChange={this.onChange.bind(this)}>
          <option value="html">YES</option>
          <option value="text">NO</option>
        </Input>
      </div>
    );
  }
}

export default Select;
