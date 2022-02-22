import React, { useState } from 'react';
import { meetingRoomModel } from '../Models/meetingRoomModel';

type MakeReservationProps = {
  startDate: string,
  endDate: string,
  rooms: meetingRoomModel[],
}

export const MakeReservation: React.FC<MakeReservationProps> = props => {
  const roomnames = props.rooms.flatMap(r => r.roomName);
  let noRoom = '';
  const [selectedRoomId, setSelectedRoomId] = useState(noRoom);

  const chooseRoomId = (e: any) => console.log(e.target.value);

  const onSubmit = (roomId: number) => {
// call service, which calls api
  }


  return (
  <>
    <form className='form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Choose a meeting room</label> 
        <select name="Meeting room" value={selectedRoomId} onChange={chooseRoomId}>
          {props.rooms.map(r => {
            return <option key={r.roomId} value={r.roomId}>{r.roomName}</option>
          })
          }
        </select>
      </div>
    </form>

  </>
  )
}
