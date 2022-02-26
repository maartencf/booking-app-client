import axios from 'axios'
import dayjs from 'dayjs';
import { meetingRoomModel } from '../Models/meetingRoomModel';

const API_URL = '/api/bookMeetingRooms/';

const formatDate = (date: string) => dayjs(new Date(date)).format('YYYY-MM-DDTHH:mm:ss.SSSZ');

export const getAvailableMeetingRooms = async (startDate: string, endDate: string) => {
  startDate = (dayjs(startDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
  endDate = (dayjs(endDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
  const response = await axios.get(API_URL, {
    params: {
      startDateTime: startDate,
      endDateTime: endDate,
    }
  });
  return response.data as meetingRoomModel[];
}

export const makeReservation = async (id: string, startDate: string, endDate: string) => {
  const response = await axios.put(API_URL + id, {
    params: {
      startDateTime: formatDate(startDate),
      endDateTime: formatDate(endDate),
    }
  })
  return response.data;
}
