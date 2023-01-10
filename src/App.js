import "./App.css";
import "flowbite";
import UserForm from "./components/UserForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className=" h-[100%] py-[100px]">
      <UserForm/>
    <ToastContainer/>
    </div>
  );
}

export default App;
