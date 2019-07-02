import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default class Demo extends Component {
  state = {
    date: new Date(),
  };

  onChange = date => {
    this.setState({ date });
    console.log(this.state.date);
  };

  render() {
    return (
      <div>
        <DateTimePicker onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
