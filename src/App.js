import React from "react";
import Calender from "./components/Calender";
import GlobalContextProvider from "./context/GlobalContextProvider";

const App = () => {
  return (
    <GlobalContextProvider>
      <Calender />
    </GlobalContextProvider>
  );
};

export default App;
