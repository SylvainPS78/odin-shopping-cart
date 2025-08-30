import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./assets/components/Header.jsx";
import PageTransition from "./assets/components/PageTransition.jsx";

function App() {
  return (
    <>
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </>
  );
}

export default App;
