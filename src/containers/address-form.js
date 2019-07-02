import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAddress } from '../actions/index';

class addressForm extends Component {
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
    const { basket } = this.props;

    return (
      <div>
        {basket.prestations.length > 0 ? (
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
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addAddress }, dispatch),
});

const mapStateToProps = state => {
  return {
    catalog: state.catalog,
    basket: state.basket,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(addressForm);
