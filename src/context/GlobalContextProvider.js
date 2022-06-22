import React, { useReducer } from "react";
import GlobalContext from "./global-context";
import { dummyAppointments } from "../dummydata/dummydata";
const globalStateReducer = (state, action) => {
  if ((action.type = "ADD_NEW_APPOINTMENT")) {
  } else if ((action.type = "CHANGE CURRENT DATE")) {
  }
};

const getCurrSunday = (input) => {
  let startDate = new Date(input);
  startDate.setDate(startDate.getDate() - startDate.getDay());
  return startDate;
};

const initGlobalState = () => {
  let currWeekArr = [];
  let today = new Date();
  today.setDate(today.getDate() - today.getDay());

  const currDate = today.toLocaleDateString();
  for (let i = 0; i < 7; i++) {
    const d = new Date(currDate);
    d.setDate(d.getDate() + i);
    currWeekArr.push(d.toLocaleDateString());
  }

  return {
    appointments: dummyAppointments,
    currDate: currDate,
    currWeekArr: currWeekArr,
  };
};

const GlobalContextProvider = (props) => {
  const [globalState, dispatchGlobalState] = useReducer(
    globalStateReducer,
    {
      currDate: new Date().toLocaleDateString(),
      appointments: {},
      currWeekArr: [],
      weekAppointments: [],
    },
    initGlobalState
  );

  return (
    <GlobalContext.Provider
      value={{
        currDate: globalState.currDate,
        currWeekArr: globalState.currWeekArr,
        appointments: globalState.appointments,
        weekAppointments: globalState.weekAppointments,
        dispatchGlobalState: dispatchGlobalState,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
