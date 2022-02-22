import './App.css';
import { Header } from './components/Header';
import { FindAvailableMeetingRooms } from './components/FindMeetingRooms'
import { Body } from './components/Body';
//import { useState } from 'react';

//const currentDate = new Date();

function App() {
/*   const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate); */

/*   const GetAvailableMeetingRooms = (startDate: Date, endDate: Date) => {
    console.log("start Date" + startDate + ", end Date " + endDate);
  } */

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
