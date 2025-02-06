// import { Rotes, Route } from "react-router-dom";

import "./App.css";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";

function App() {
  return (
    <>
      <div className='container grid grid-cols-4 divide-x-1 divide-gray-500 h-[95vh]'>
        <List />
        <Chat />
        <Detail />
      </div>
    </>
  );
}

export default App;
