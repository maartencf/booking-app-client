export type meetingRoomModel = {
  roomId: number,
  roomName: string,
  bookedTimes: [{
    startDateTime: Date,
    endDateTime: Date,
  }]
};

/* export type FindAvailableMeetingRoomsProps = {
  //startDate: Date,
  //endDate: Date,
  getRooms: (startDate: string, endDate: string) => void,
} */