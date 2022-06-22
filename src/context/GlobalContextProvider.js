import React, { useReducer } from "react";
import GlobalContext from "./global-context";
import { dummyAppointments } from "../dummydata/dummydata";
const globalStateReducer = (state, action) => {
  const newState = { ...state };

  if (action.type === "ADD_NEW_APPOINTMENT") {
    const newEntry = {
      msg: action.msg,
      startTime: action.startTime,
      endTime: action.endTime,
      date: action.date,
    };

    if (newState.appointments.hasOwnProperty(action.date)) {
      newState.appointments[action.date].push(newEntry);
    } else {
      const arr = [];
      arr.push(newEntry);
      newState.appointments[action.date] = arr;
    }
    newState.currWeekArr = getWeekArr(newState.currDate);
    console.log(newEntry);
  } else if (action.type === "TOGGLE_NEXT_WEEK") {
    let newDate = new Date(state.currDate);
    newDate.setDate(newDate.getDate() + 7);
    newDate = newDate.toLocaleDateString();
    newState.currDate = newDate;
    newState.currWeekArr = getWeekArr(newDate);
  } else if (action.type === "TOGGLE_PREV_WEEK") {
    let newDate = new Date(state.currDate);
    newDate.setDate(newDate.getDate() - 7);
    newDate = newDate.toLocaleDateString();
    newState.currDate = newDate;
    newState.currWeekArr = getWeekArr(newDate);
  }
  return newState;
};

const getWeekArr = (date) => {
  const weekarr = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(date);
    d.setDate(d.getDate() + i);
    weekarr.push(d.toLocaleDateString());
  }
  return weekarr;
};

const initGlobalState = () => {
  let today = new Date();
  today.setDate(today.getDate() - today.getDay());

  const currDate = today.toLocaleDateString();

  return {
    appointments: dummyAppointments,
    currDate: currDate,
    currWeekArr: getWeekArr(currDate),
  };
};

const GlobalContextProvider = (props) => {
  const [globalState, dispatchGlobalState] = useReducer(
    globalStateReducer,
    {
      currDate: new Date().toLocaleDateString(),
      appointments: dummyAppointments,
      currWeekArr: getWeekArr(new Date().toLocaleDateString()),
    },
    initGlobalState
  );

  return (
    <GlobalContext.Provider
      value={{
        currDate: globalState.currDate,
        currWeekArr: globalState.currWeekArr,
        appointments: globalState.appointments,
        dispatchGlobalState: dispatchGlobalState,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
