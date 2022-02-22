import axios from 'axios'
import { meetingRoomModel } from '../Models/meetingRoomModel';

const BASE_URL = 'http://localhost:8080';

const API_URL = '/api/bookMeetingRooms/';

export const getAvailableMeetingRooms = async (startDate: string, endDate: string) => {
  const response = await axios.get(BASE_URL + API_URL, {
    params: {
      startDate: startDate,
      endDate: endDate,
    }
  });
  return response.data as meetingRoomModel[];
}
