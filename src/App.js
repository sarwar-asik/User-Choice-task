import "./App.css";
import "flowbite";
import UserForm from "./components/UserForm";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Main from "./Layout/Main";
import UserInfo from "./components/UserInfo";
import EditModal from "./components/EditModal";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/user", element: <UserInfo /> },
        { path: "/editUser/:name", element: <EditModal /> },
      ],
    },
  ]);
  return (
    <div className=" h-[100%] py-[100px]">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
