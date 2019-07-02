import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAppointment } from '../actions/index';

class CalendarForm extends Component {
  state = {
    date: new Date(),
  };

  onChange = date => {
    this.setState({ date });
    this.props.addAppointment(this.state.date.toISOString());
  };

  render() {
    const { basket } = this.props;
    const { date } = this.state;

    return (
      <div>{basket.adress ? <DateTimePicker onChange={this.onChange} value={date} /> : null}</div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addAppointment }, dispatch),
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
)(CalendarForm);
