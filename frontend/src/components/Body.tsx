import { FindAvailableMeetingRooms } from '../components/FindMeetingRooms'
import { useState } from 'react';
import { meetingRoomModel } from '../Models/meetingRoomModel';
import { getAvailableMeetingRooms } from '../services/meetingRoomService';
import { MakeReservation } from './MakeReservation';
import dayjs from 'dayjs';

const availableRooms = {} as meetingRoomModel[];
const currentDate = dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ssZ[Z]');

export const Body: React.FC = () => {
  const [availableMeetingRooms, setAvailableMeetingRooms] = useState(availableRooms);
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);

  const getRooms = async (startDate: string, endDate: string) => {
  const rooms = await getAvailableMeetingRooms(startDate, endDate);
    setAvailableMeetingRooms(rooms);
    setStartDate(startDate);
    setEndDate(endDate);
  }

  const showReservationButton = availableMeetingRooms.length > 0;

  return ( 
    showReservationButton ?
    <>
      <FindAvailableMeetingRooms getRooms={getRooms} />
      <MakeReservation startDate={startDate} endDate={endDate} rooms={availableMeetingRooms}  />
    </> :
    <>
      <FindAvailableMeetingRooms getRooms={getRooms} />
    </>
  );
}