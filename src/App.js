import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import events from "./events";
import "./App.css";
import {Button } from 'react-bootstrap';
import MyModal from './components/Modal';
import records from "./records.json";






const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


const dummyData = {
  title: 'Spike1',
  StartDate: new Date('2022-08-03T13:45:00-05:00'),
  endDate: new Date('2022-08-20T14:00:00-05:00'),
  key: "TNP-3880",
  summary: "Test",
  netsTicketNumber: "N/A",
  wirelessTicketNumber: "N/A",
  assignee: "None",
  tenantType: "Wireline",
  stackType: "Infra (Internal use)",
  site: "Canniff Lab - TOROON12",
  impactDevices: "No High-Impact Devices",
  assetName: "Test",
  wirelessRisk: "P2",
  wirelineRisk: "RL1",
}


function App(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSelectedEvent = (event) => {
    handleShow();
    console.log(event);
    return (
      <MyModal
      data = {event}
      show ={show}
      onHide={handleClose}
      >
     </MyModal>
    );
  }

  return (
    <div className="App">
      {
        records.map(record => {
          return(
            <div className= "box"> {record.title} </div>
          )
        })
      }

    <h1> Unified Calendar</h1>
    <Button variant="primary" onClick={handleShow}> Open Modal</Button>
   <MyModal
   show ={show}
   onHide={handleClose}
   event = {dummyData}
   >

  </MyModal>

      <Calendar localizer={localizer}
       events = {events}
       popup
       startAccessor="StartDate"
       endAccessor="endDate"
       titleAccessor = "key"
       style = {{height: 500, margin: "50px",}}
       toolbar={true}
       onSelectEvent={(event) => handleSelectedEvent(event) }
       />
    </div>
  );
}

export default App;

