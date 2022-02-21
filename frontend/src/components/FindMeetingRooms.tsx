import React from 'react';
import { useState } from 'react';

/* type FindAvailableMeetingRoomsProps = {
  //startDate: Date,
  //endDate: Date,
  getRooms: (startDate: Date, endDate: Date) => void,
} */



const currentDate = new Date().toDateString();

export const FindAvailableMeetingRooms: React.FC = () => {
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
const GetAvailableMeetingRooms = (startDate: string, endDate: string) => {
  console.log("start Date" + startDate + ", end Date " + endDate);
}

const onSubmit = (e: any) => {
  e.preventDefault();
  GetAvailableMeetingRooms(startDate, endDate);
  setStartDate(currentDate);
  setEndDate(currentDate);
}

  return (
    <div className='availableMeetingRooms'>
      <h3>Find available meeting rooms</h3>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Start date and time</label>
          <input type='datetime-local' value={startDate} onChange={(e: any) => setStartDate(e.target.value) }/>
        </div>

        <div className='form-control'>
          <label>End date and time</label>
          <input type='datetime-local' value={endDate} onChange={(e: any) => setEndDate(e.target.value) }/>
        </div>

        <div>
          <input type='submit' value='Find available meeting rooms' className='btn btn-block'/> {/* onSubmit={onSubmit}/> */}
        </div>
      </form>
    </div>
  );
};