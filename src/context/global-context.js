import React from "react";

const GlobalContext = React.createContext({
  currDate: "",
  appointments: {},
  currWeekArr: [],
});

export default GlobalContext;
