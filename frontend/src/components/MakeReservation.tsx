import React, { useState } from "react";
import { meetingRoomModel } from "../Models/meetingRoomModel";
import { makeReservation } from "../services/meetingRoomService";

type MakeReservationProps = {
  startDate: string;
  endDate: string;
  rooms: meetingRoomModel[];
};

export const MakeReservation: React.FC<MakeReservationProps> = (props) => {
  const firstRoomId = props.rooms.flatMap((r) => r.roomId)[0].toString();
  const [selectedRoomId, setSelectedRoomId] = useState(firstRoomId);

  const chooseRoomId = (e: any) => {
    setSelectedRoomId(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const response = await makeReservation(
      selectedRoomId,
      props.startDate,
      props.endDate
    );

    if (response?.acknowledged) alert("Reservation succeeded.");
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Choose a meeting room</label>
          <select
            name="Meeting room"
            id="Meeting Room"
            value={selectedRoomId}
            onChange={chooseRoomId}
          >
            {props.rooms.map((r) => {
              return (
                <option key={r.roomId} value={r.roomId}>
                  {r.roomName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control">
          <input
            type="submit"
            value="Make a reservation"
            className="btn btn-block"
          />
        </div>
      </form>
    </>
  );
};
