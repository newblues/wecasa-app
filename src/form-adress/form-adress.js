import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAddress } from '../redux/actions/index';

class FormAddress extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
    };
  }

  handleChangeaddress = event => {
    this.setState({ address: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAddress(this.state.address);
  };

  render() {
    const { address } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {' '}
          <Label>
            <Input
              type="text"
              value={address}
              onChange={this.handleChangeaddress}
              placeholder="Add your address..."
            />{' '}
          </Label>
          <Button type="submit" value="Submit" color="primary">
            Confirm
          </Button>{' '}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addAddress }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(FormAddress);
