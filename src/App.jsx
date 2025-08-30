import "./assets/styles/App.css";
import Header from "./assets/components/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
