import React, { useReducer } from "react";
import GlobalContext from "./global-context";
import { dummyWeekbar } from "../dummydata/dummydata";
const globalStateReducer = (state, action) => {
  if ((action.type = "ADD_NEW_APPOINTMENT")) {
  } else if ((action.type = "CHANGE CURRENT DATE")) {
  }
};

const calculateGlobalState = (input) => {
  return {};
};

const GlobalContextProvider = (props) => {
  const [globalState, dispatchGlobalState] = useReducer(globalStateReducer, {
    currDate: new Date(),
    appointments: [],
    currWeekArr: dummyWeekbar,
    weekAppointments: [],
  });

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
