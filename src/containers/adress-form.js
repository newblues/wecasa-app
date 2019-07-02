import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAdress } from '../actions/index';

class AdressForm extends Component {
  constructor() {
    super();
    this.state = {
      adress: '',
    };
  }

  handleChangeAdress = event => {
    this.setState({ adress: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAdress(this.state.adress);
  };

  render() {
    const { adress } = this.state;
    const { basket } = this.props;

    return (
      <div>
        {basket.prestations.length > 0 ? (
          <Form onSubmit={this.handleSubmit}>
            {' '}
            <Label>
              <Input
                type="text"
                value={adress}
                onChange={this.handleChangeAdress}
                placeholder="Add your adress..."
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
  ...bindActionCreators({ addAdress }, dispatch),
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
)(AdressForm);
