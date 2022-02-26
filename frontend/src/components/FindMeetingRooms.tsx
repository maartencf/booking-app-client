import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';

type FindAvailableMeetingRoomsProps = {
  getRooms: (startDate: string, endDate: string) => void,
}

const currentDate = dayjs(new Date()).format('YYYY-MM-DDTHH:mm');

export const FindAvailableMeetingRooms: React.FC<FindAvailableMeetingRoomsProps> = props => {
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
const GetAvailableMeetingRooms = async (startDate: string, endDate: string) => {
  props.getRooms(startDate, endDate);
}

const onSubmit = (e: any) => {
  e.preventDefault();
  setStartDate(startDate);
  setEndDate(endDate);
  GetAvailableMeetingRooms(startDate, endDate);
}
  return (
    <div className='availableMeetingRooms'>
      <h3>Find available meeting rooms</h3>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Start date and time</label>
          <input type='datetime-local' value={startDate} onChange={(e: any) => setStartDate(dayjs(e.target.value).format('YYYY-MM-DDTHH:mm'))} placeholder={currentDate}/>
        </div>

        <div className='form-control'>
          <label>End date and time</label>
          <input type='datetime-local' value={endDate} onChange={(e: any) => setEndDate(dayjs(e.target.value).format('YYYY-MM-DDTHH:mm'))} placeholder={currentDate}/>
        </div>

        <div>
          <input type='submit' value='Find available meeting rooms' className='btn btn-block'/>
        </div>
      </form>
    </div>
  );
};