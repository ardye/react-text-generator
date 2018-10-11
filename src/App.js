import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';
import { Col, Form, Row, FormGroup, Container } from 'reactstrap';
import axios from 'axios';
import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      format: 'html',
      text: ''
    };
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText = () => {
    axios
      .get(
        'https://baconipsum.com/api/?type=meat-and-filler&' +
          this.state.paras +
          '&format=' +
          this.state.format
      )
      .then(res => {
        this.setState({ text: res.data });
      })
      .catch(err => console.log(err));
  };
  showHTML = x => {
    this.setState({ format: x }, this.getSampleText);
  };
  showParas = num => {
    this.setState({ paras: num }, this.getSampleText);
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Text
                    value={this.state.paras}
                    onChange={this.showParas.bind(this)}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Select
                    value={this.state.html}
                    onChange={this.showHTML.bind(this)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <Output value={this.state.text} />
        </Container>
      </div>
    );
  }
}

export default App;
