import axios from 'axios'
import dayjs from 'dayjs';
import { meetingRoomModel } from '../Models/meetingRoomModel';

const API_URL = '/api/bookMeetingRooms/';

const formatDate = (date: string) => dayjs(new Date(date)).format('YYYY-MM-DDTHH:mm:ss.SSSZ');

export const getAvailableMeetingRooms = async (startDate: string, endDate: string) => {
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
  const response = await axios.put(API_URL + id, {
    params: {
      startDateTime: formatDate(startDate),
      endDateTime: formatDate(endDate),
    }
  })
  console.log("make reservation");
  console.log(response.data);
  return response.data;
}
