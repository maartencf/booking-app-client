import axios from 'axios'
import dayjs from 'dayjs';
import { meetingRoomModel } from '../Models/meetingRoomModel';

//const BACKEND_BASE_URL = 'http://localhost:8080';

const API_URL = '/api/bookMeetingRooms/';

const formatDate = (date: string) => dayjs(new Date(date)).format('YYYY-MM-DDTHH:mm:ss.SSSZ');

export const getAvailableMeetingRooms = async (startDate: string, endDate: string) => {
  //var t = (new Date(startDate).toLocaleString("en",{timeZone: "gb"}));
  console.log("startDate");
  console.log(startDate);
  startDate = (dayjs(startDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
  endDate = (dayjs(endDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
  console.log("send request");
  const response = await axios.get(API_URL, {
    params: {
      startDateTime: startDate,
      endDateTime: endDate,
    }
  });
  return response.data as meetingRoomModel[];
}

export const makeReservation = async (id: string, startDate: string, endDate: string) => {
  console.log("id: " + id);
  /* var t = (new Date(startDate).toLocaleString("en",{timeZone: "gb"}));
  console.log(t); */
  const response = await axios.put(API_URL + id, {
    params: {
/*       startDateTime: new Date(startDate).toLocaleString("en",{timeZone: "gb"}),
      endDateTime: new Date(endDate).toLocaleString("en",{timeZone: "gb"}), */
      startDateTime: formatDate(startDate),
      endDateTime: formatDate(endDate),
    }
  })
  console.log("make reservation");
  console.log(response.data);
  return response.data;
}
