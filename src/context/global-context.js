import React from "react";

const GlobalContext = React.createContext({
  currDate: null,
  currWeekArr: [],
  appointments: [],
  weekAppointments: [],
  dispatchGlobalState: () => {},
});

export default GlobalContext;
