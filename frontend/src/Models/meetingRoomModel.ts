export type meetingRoomModel = {
  roomId: number,
  roomName: string,
  bookedTimes: [{
    startDateTime: Date,
    endDateTime: Date,
  }]
};
