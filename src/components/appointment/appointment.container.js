import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import 'react-datepicker/dist/react-datepicker.css';

const AppointmentContainer = ({ addAppointmentDate }) => {
  // https://reactdatepicker.com/

  const [startDate, setStartDate] = useState(new Date());

  const handleChange = date => {
    setStartDate(date);
  };

  const handleClick = () => {
    addAppointmentDate(startDate);
  };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd MMMM yyyy h:mm aa"
        todayButton={"Aujourd'hui"}
        minDate={new Date()}
      />
      <div style={{ marginTop: 20 }}>
        <Link to="/step/bookingConfirmation">
          <Button type="primary" onClick={() => handleClick()}>
            {'Suivant'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentContainer;
