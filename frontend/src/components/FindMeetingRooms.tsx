import React from 'react';
import { useState, useEffect } from 'react';
import { getAvailableMeetingRooms } from '../services/meetingRoomService';
import dayjs from 'dayjs';
import { meetingRoomModel } from '../Models/meetingRoomModel';

type FindAvailableMeetingRoomsProps = {
  //startDate: Date,
  //endDate: Date,
  getRooms: (startDate: string, endDate: string) => void,
}

//const availableRooms = {} as meetingRoomModel[];
let rooms = 0;

const currentDate = dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ss');

export const FindAvailableMeetingRooms: React.FC<FindAvailableMeetingRoomsProps> = props => {
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
  //const [availableMeetingRooms, setAvailableMeetingRooms] = useState(availableRooms);
const GetAvailableMeetingRooms = async (startDate: string, endDate: string) => {
  //console.log("start Date" + startDate + ", end Date " + endDate);
  //const rooms = await getAvailableMeetingRooms(startDate, endDate)
  props.getRooms(startDate, endDate);
  //setAvailableMeetingRooms(rooms);
/*   if (rooms.length === 0) {

  } */
}

const onSubmit = (e: any) => {
  e.preventDefault();
  GetAvailableMeetingRooms(startDate, endDate);
  //setStartDate(currentDate);
  //setEndDate(currentDate);
}
  //availableMeetingRooms ? return (<></>) :
 
  return (
    <div className='availableMeetingRooms'>
      <h3>Find available meeting rooms</h3>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Start date and time</label>
          <input type='datetime-local' value={startDate} onChange={(e: any) => setStartDate(e.target.value)} placeholder={currentDate}/>
        </div>

        <div className='form-control'>
          <label>End date and time</label>
          <input type='datetime-local' value={endDate} onChange={(e: any) => setEndDate(e.target.value)} placeholder={currentDate}/>
        </div>

        <div>
          <input type='submit' value='Find available meeting rooms' className='btn btn-block'/> {/* onSubmit={onSubmit}/> */}
        </div>
      </form>
    </div>
  );
};