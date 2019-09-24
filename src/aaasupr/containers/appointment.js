import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAppointment, fetchBooking } from '../actions/index';

import SuccessAlert from '../components/successAlert';

class Appointment extends Component {
  state = {
    date: new Date(),
  };

  onChange = date => {
    this.setState({ date });
    this.props.addAppointment(this.state.date.toISOString());
  };

  handleClick = basket => {
    const bookingData = JSON.stringify({
      address: basket.address,
      appointment: basket.appointment,
      prestations: basket.ref,
    });
    this.props.fetchBooking(bookingData);
  };

  render() {
    const { basket, booking } = this.props;
    const { date } = this.state;

    return (
      <div>
        {basket.address ? (
          <div>
            <DateTimePicker onChange={this.onChange} value={date} />
            <Button
              type="submit"
              value="Submit"
              color="primary"
              onClick={() => this.handleClick(basket)}
            >
              Confirm Booking
            </Button>{' '}
          </div>
        ) : null}
        {booking.success ? <SuccessAlert /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addAppointment, fetchBooking }, dispatch),
});

const mapStateToProps = state => {
  return {
    catalog: state.catalog,
    basket: state.basket,
    booking: state.booking,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointment);
