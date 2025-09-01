import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./assets/components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
