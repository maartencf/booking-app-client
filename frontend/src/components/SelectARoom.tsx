import { useEffect, useState } from "react";
import { meetingRoomModel } from "../Models/meetingRoomModel";
import { getAvailableMeetingRooms } from "../services/meetingRoomService"

/* type SelectRoomProps = {
  //startDate: Date,
  //endDate: Date,
  getRooms: (startDate: string, endDate: string) => void,
} */

export const SelectRoom: React.FC = props => {

let emptyRoomsInDB = {} as meetingRoomModel[];
const [meetingRooms, setMeetingRooms] = useState(emptyRoomsInDB);

const currentDate = new Date();

const [date, setDate] = useState(currentDate);


  const onSubmitAll = async () => {
    //roomsInDB = await getAvailableMeetingRooms(); //new Date().toString(), new Date().toString());
    setMeetingRooms(await getAvailableMeetingRooms(new Date("1171-01-01").toString(), new Date("1171-01-01").toString())); //new Date().toString(), new Date().toString());
    //return roomsInDB
  }
/*   useEffect( () => {
    getAvailableMeetingRooms(new Date("1171-01-01").toString(), new Date("1171-01-01").toString())

  }, [roomsInDB]) */
  
  const onSubmit = () => {
    //return 1;
  }

  const areRoomsToChoose = meetingRooms.length > 0;
  console.log(areRoomsToChoose);

  return (
    /* !areRoomsToChoose ? ( */
    <>
      <form className="form" onSubmit={onSubmitAll}>
        <div className="form-control">
          <input type="submit" value='Get meeting rooms' className="btn btn-block" />
        </div>
    </form>

    <form className="form" onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Date</label>
          <input type='date' value={date.toString()} onChange={(e: any) => setDate(e.target.value)} placeholder={currentDate.toString()}/>
        </div>

      <div className="form-control">
        <input type="submit" value='Get meeting overview' className="btn btn-block" />
      </div>

    </form>
    </>
  );
}