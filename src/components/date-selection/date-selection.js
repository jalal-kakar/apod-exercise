import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";


function YearMonthPicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  props.updateDate(selectedDate);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label="Date 📅"
        disableFuture
        format='MM-dd-yyyy'
        value={selectedDate}
        onChange={handleDateChange}
      />
      </MuiPickersUtilsProvider>
  );
}

export default YearMonthPicker;